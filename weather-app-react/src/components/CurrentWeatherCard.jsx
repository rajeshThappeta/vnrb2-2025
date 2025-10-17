function CurrentWeatherCard({ data, city }) {
 // console.log("data is ", data);
  return (
    <div>
      <div className="bg-light p-5">
        <h2 className="displa-4 mb-4">Current Weather in {city}</h2>
        <div className="flex justify-content-center">
          <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} width="200px" alt="" />
          <p className="fs-1">{data.main.temp}°C</p>
          <p className="fs-5">{data.weather[0].description}</p>
          <p className="lead">Wind : {data.wind.speed}</p>
          <p>Feels like :{data.main.feels_like}°C</p>
          <p className="lead">Humidity: {data.main.humidity}</p>
        </div>
      </div>
    </div>
  );
}

export default CurrentWeatherCard;
