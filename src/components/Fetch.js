import { useState, useEffect } from "react";
import axios from "axios";

function Fetch() {
  const [ weather, setWeather ] = useState({});

  const APIKey = process.env.REACT_APP_APIKEY;
  let city = "";

  useEffect(() => {
    fetchWeather("Stockholm");
  },[]);

  // fetch API
  const fetchWeather = (city) => { 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`;
    axios
      .get(url)
      .then((response) => {
        setWeather(response.data);
      })
      .catch(error => {
        console.log(error.response.status)
      });

      // // save sunrise and sunset times
      // let sunrise = new Date(data.sys.sunrise * 1000);
      // let sunriseTime = getSunriseTime(sunrise);
      // let sunset = new Date(data.sys.sunset * 1000);
      // let sunsetTime = getSunsetTime(sunset);
      // console.log(sunriseTime, sunsetTime);
  };

  // functions to get sunrise and sunset time
  const getSunriseTime = (sunrise) => {
    let sunriseHour = sunrise.getHours().toLocaleString("sv-SE", { minimumIntegerDigits: 2 });
    let sunriseMinutes = sunrise.getMinutes().toLocaleString("sv-SE", { minimumIntegerDigits: 2 });
    return `sunrise: ${sunriseHour}:${sunriseMinutes}`;
  };

  const getSunsetTime = (sunset) => {
    let sunsetHour = sunset.getHours().toLocaleString("sv-SE", { minimumIntegerDigits: 2 });
    let sunsetMinutes = sunset.getMinutes().toLocaleString("sv-SE", { minimumIntegerDigits: 2 });
    return `sunset: ${sunsetHour}:${sunsetMinutes}`;
  };

  console.log(weather);

  return (
    <div>
      {/* <p>{weather.main.temp}&deg;C</p>
      <p>{weather.name}</p>
      <p>{weather.weather[0].main}</p> */}
    </div>
  )
}

export default Fetch
