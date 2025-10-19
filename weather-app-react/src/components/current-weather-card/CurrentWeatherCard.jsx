function CurrentWeatherCard({ data, city }) {
  // console.log("data is ", data);

  //function converts timestamp to custom date format
  function formatToIST(timestamp) {
    // Convert seconds → milliseconds
    const date = new Date(timestamp * 1000);

    // Convert to IST (UTC +5:30)
    const istTime = new Date(date.getTime() + 5.5 * 60 * 60 * 1000);

    const day = String(istTime.getUTCDate()).padStart(2, "0");
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const month = monthNames[istTime.getUTCMonth()];
    const year = istTime.getUTCFullYear();

    const hours = String(istTime.getUTCHours()).padStart(2, "0");
    const minutes = String(istTime.getUTCMinutes()).padStart(2, "0");
    const seconds = String(istTime.getUTCSeconds()).padStart(2, "0");

    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
  }
  console.log(formatToIST(Date.now()));

  return (
    <div className="weather-container container my-5">
      <div className="card weather-card shadow-lg">
        {/* Header */}
        <div className="card-header d-flex justify-content-between align-items-center bg-primary text-white">
          <h3 className="m-0">{data.name}, {data.sys.country}</h3>
          <div className="d-flex align-items-center">
            <img
              src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
              alt={data.weather[0].description}
              className="weather-icon"
            />
            <div>
              <p className="m-0 fw-bold">{data.weather[0].main}</p>
              <p className="m-0 text-capitalize small">{data.weather[0].description}</p>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="card-body">
          <div className="text-center mb-4">
            <h1 className="display-4 fw-bold">{data.main.temp.toFixed(1)}°C</h1>
            <p className="text-muted">Feels like {data.main.feels_like.toFixed(1)}°C</p>
          </div>

          <div className="row text-center g-3">
            <div className="col-6 col-md-4">
              <div className="info-box">
                <h6>Humidity</h6>
                <p>{data.main.humidity}%</p>
              </div>
            </div>
            <div className="col-6 col-md-4">
              <div className="info-box">
                <h6>Pressure</h6>
                <p>{data.main.pressure} hPa</p>
              </div>
            </div>
            <div className="col-6 col-md-4">
              <div className="info-box">
                <h6>Wind</h6>
                <p>{data.wind.speed} m/s, {data.wind.deg}°</p>
              </div>
            </div>
            <div className="col-6 col-md-4">
              <div className="info-box">
                <h6>Visibility</h6>
                <p>{data.visibility / 1000} km</p>
              </div>
            </div>
            <div className="col-6 col-md-4">
              <div className="info-box">
                <h6>Clouds</h6>
                <p>{data.clouds.all}%</p>
              </div>
            </div>
            <div className="col-6 col-md-4">
              <div className="info-box">
                <h6>Sea Level</h6>
                <p>{data.main.sea_level || "—"} hPa</p>
              </div>
            </div>
          </div>

          <div className="sun-info mt-4 text-center">
            <h5 className="fw-semibold mb-2">🌅 Sunrise & 🌇 Sunset</h5>
            <div className="d-flex justify-content-center gap-4">
              <p className="mb-0">Sunrise: <span className="fw-bold">{formatToIST(data.sys.sunrise)}</span></p>
              <p className="mb-0">Sunset: <span className="fw-bold">{formatToIST(data.sys.sunset)}</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurrentWeatherCard;
