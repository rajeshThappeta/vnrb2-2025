import SearchBar from "./SearchBar";
import CurrentWeatherCard from "./CurrentWeatherCard";
import ForecastDay from "./ForecastDay";
import { useEffect, useState } from "react";

function WeatherPage() {
  //state
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [city, setCity] = useState("Hyderabad");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  //API key
  const apiKey = "32fb1319e5d2462d3820c7690ae1f392";

  // handle search by city
  const handleSearch = (newCity) => {
    if (newCity !== null) {
      //update city
      setCity(newCity);
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

      // console.log("Current weather :", currentData);
      // console.log("Forecast data :", forecastList);

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
  }, [city]);

  return (
    <div className="container">
      <SearchBar onSearch={handleSearch} isLoading={isLoading} />

      {/* error */}
      {
        error!==null && <div className="bg-danger text-white fs-2 p-4">
            {error}
        </div>
      }

      {/* pass currebtData as prop only if it is not null */}

      {currentWeather && <CurrentWeatherCard data={currentWeather} city={city} />}

      {forecastData !== null && (
        <div className="d-flex overflow-x-auto">
          {forecastData.list.map((forecastObj, index) => (
            <ForecastDay data={forecastObj} key={index} />
          ))}
        </div>
      )}
    </div>
  );
}

export default WeatherPage;
