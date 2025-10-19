import './ForecastDay.css'


function formatTime(dt_txt) {
  const date = new Date(dt_txt);
  const hours = date.getHours().toString().padStart(2, "0");
  const day = date.toLocaleDateString("en-GB", {
    weekday: "short",
    day: "2-digit",
    month: "short",
  });
  return `${day} ${hours}:00`;
}

function ForecastDay({ data }) {
  const icon = data.weather[0].icon;
  const temp = data.main.temp.toFixed(1);

  return (
    <div className="forecast-card text-center mx-2 p-3">
      <img
        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        alt="weather icon"
        className="forecast-icon mb-2"
      />
      <p className="mb-1 fw-bold">{temp}°C</p>
      <small className="forecast-time">{formatTime(data.dt_txt)}</small>
    </div>
  );
}

export default ForecastDay;
