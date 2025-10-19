import "./WeatherPage.css";
import SearchBar from "../SearchBar";
import CurrentWeatherCard from "../current-weather-card/CurrentWeatherCard";
import ForecastDay from "../forecast-day/ForecastDay";
import { useEffect, useState } from "react";

function WeatherPage() {
  //state
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [city, setCity] = useState("Hyderabad");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTrigger, setSearchTrigger] = useState(0);

  //API key

  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

  // handle search by city
  const handleSearch = (newCity) => {
    if (newCity !== null) {
      //update city
      setCity(newCity);
      setSearchTrigger((prev) => prev + 1); // Force re-fetch
      //reset state
      setCurrentWeather(null);
      setForecastData(null);
      setError(null);
    }
  };

  //fetch data by city from 2 APIs
  const fetchData = async () => {
    setIsLoading(true);
    setError(null);
    try {
      //fetch current weather info
      const currentRes = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      //fetch forecast data
      const forecastRes = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`
      );

      //check res
      if (currentRes.status !== 200 && forecastData.status !== 200) {
        throw new Error("City not found");
      }

      //extract res
      const currentData = await currentRes.json();
      const forecastList = await forecastRes.json();

      //update state
      setCurrentWeather(currentData);
      setForecastData(forecastList);
    } catch (err) {
      setError(`Failed to fetch data from  city ${city}`);
      setCurrentWeather(null);
      setForecastData(null);
    } finally {
      setIsLoading(false);
    }
  };

  //fetch data when app launches
  useEffect(() => {
    fetchData();
  }, [city, searchTrigger]);

  return (
    <div className="weather-page-bg min-vh-100 d-flex flex-column align-items-center py-4">
      <SearchBar onSearch={handleSearch} isLoading={isLoading} />

      {error && <div className="bg-danger text-white fs-5 p-3 rounded shadow">{error}</div>}

      {currentWeather && <CurrentWeatherCard data={currentWeather} city={city} />}

      {forecastData && (
        <div className="forecast-scroll-wrapper my-3 w-100">
          <div className="forecast-container d-flex">
            {forecastData.list.map((forecastObj, index) => (
              <ForecastDay data={forecastObj} key={index} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default WeatherPage;
