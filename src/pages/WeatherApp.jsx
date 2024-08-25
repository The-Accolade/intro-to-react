import Search from "../components/weatherComponents/Search";
import CurrentWeather from "../components/weatherComponents/CurrentWeather";
import { weatherApiURL, weatherApiKey } from "../helpers/weather-api";
import { useState } from "react";

function WeatherApp() {
  const [weatherResult, setWeatherResult] = useState(null);

  console.log({ weatherResult });

  const convertTimestampToTime = (timestamp) => {
    let dateObj = new Date(timestamp * 1000);
    let utcString = dateObj.toUTCString();
    let time = utcString.slice(-12, -7);
    return time;
  };

  const handleSearch = async (searchData) => {
    const cityName = searchData.label;
    const [lat, long] = searchData.value.split(" ");

    try {
      const weatherFetch = await fetch(
        `${weatherApiURL}/weather?lat=${lat}&lon=${long}&appid=${weatherApiKey}`
      );
      const result = await weatherFetch.json();

      if (weatherFetch.ok) {
        setWeatherResult({
          name: cityName,
          temperature: Math.floor(result.main.temp - 273),
          feelsLike: Math.ceil(result.main.feels_like - 273),
          sunrise: convertTimestampToTime(result.sys.sunrise) + " AM",
          sunset: convertTimestampToTime(result.sys.sunset) + " PM",
          description: result.weather[0].description,
          icon: result.weather[0].icon,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Search onSearchChange={handleSearch} />
      {weatherResult && <CurrentWeather result={weatherResult} />}  
    </div>
  );
}

export default WeatherApp;
