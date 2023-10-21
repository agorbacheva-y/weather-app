import { useState, useEffect } from "react";
import axios from "axios";

function Fetch() {
  const [ weather, setWeather ] = useState({});
  const [ sunsetTimeShort, setSunsetTimeShort ] = useState("");
  const [ sunriseTimeShort, setSunriseTimeShort ] = useState("");

  const APIKey = process.env.REACT_APP_APIKEY;
  let city = "";

  // fetch data
  useEffect(() => {
    fetchWeather("Stockholm");
  },[]);

  // call function for sunrise and sunset times
  useEffect(() => {
    getSunriseTime();
    getSunsetTime();
  },[weather])


  // function to fetch API
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
  };

  // functions to get sunrise and sunset time
  const getSunriseTime = () => {
    let sunriseTime = new Date((weather.sys.sunrise + weather.timezone) * 1000);
    let sunriseTimeLocale = 
      sunriseTime.setMinutes(sunriseTime.getMinutes() + sunriseTime.getTimezoneOffset());
    setSunriseTimeShort(sunriseTime.toLocaleTimeString("sv-SE", {timeStyle: "short"}));
    console.log(sunriseTimeShort);
  };

  const getSunsetTime = () => {
    let sunsetTime = new Date((weather.sys.sunset + weather.timezone) * 1000);
    let sunsetTimeLocale = 
    sunsetTime.setMinutes(sunsetTime.getMinutes() + sunsetTime.getTimezoneOffset());
    setSunsetTimeShort(sunsetTime.toLocaleTimeString("sv-SE", {timeStyle: "short"}));
    console.log(sunsetTimeShort);
  };

  console.log(weather);

  return (
    <header>
      {/* <div>
        <p>{weather.main.temp}&deg;C</p>
        <p>{weather.name}</p>
        <p>{weather.weather[0].main}</p>
      </div>
      
      <div>
        <span>sunrise</span>
        <span>{sunsetTimeShort}</span>
      </div> */}
    </header>
  )
}

export default Fetch

// my key: fbb34d8403102e377ffd87aab22322ed