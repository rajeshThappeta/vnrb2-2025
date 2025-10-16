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
  const apiKey = "";

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
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}$units=metric`
      );
      const currentData = await currentRes.json();
      const forecastList = await forecastRes.json();
      //check res
      if (currentRes.status !== 200 && forecastData.status !== 200) {
        throw new Error("City not found");
      }

      //extract res

      console.log("Current weather :", currentData);
      console.log("Forecast data :", forecastList);
    } catch (err) {
      setError("Failed to fetch data");
      setCurrentWeather(null);
      setForecastData(null);
    } finally {
      setIsLoading(false);
    }
  };

  //fetch data when app launches
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container">
      <SearchBar />
      <CurrentWeatherCard />
      <ForecastDay />
    </div>
  );
}

export default WeatherPage;
