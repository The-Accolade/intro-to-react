import "./current-weather.css";

const CurrentWeather = ({ result }) => {
  return (
    <div className="mt-5 weather">
      <div className="top">
        <div>
          <p className="city">{result && result.name}</p>
          <p className="weather-description">{result && result.description}</p>
        </div>
        <img
          src={`/weather-icons/${result && result.icon}.png`}
          alt="weather"
          className="weather-icon"
        />
      </div>
      <div className="bottom">
        <p className="temperature">
          {Math.floor(result && result.temperature)}°C
        </p>
        <div className="details">
          <div>
            <div className="parameter-row">
              <span className="parameter-label">Feels like</span>
              <span className="parameter-value">
                {result && result.feelsLike}
              </span>
            </div>
            <div className="parameter-row">
              <span className="parameter-label">Sunrise</span>
              <span className="parameter-value">
                {result && result.sunrise}
              </span>
            </div>
            <div className="parameter-row">
              <span className="parameter-label">Sunset</span>
              <span className="parameter-value">{result && result.sunset}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
