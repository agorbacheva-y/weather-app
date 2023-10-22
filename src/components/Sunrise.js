import { useState, useEffect } from "react";

const Sunrise = ({ weather }) => {
  const [ sunriseTimeShort, setSunriseTimeShort ] = useState("");
//const [ sunsetTimeShort, setSunsetTimeShort ] = useState("");

  // call function for sunrise and sunset times
  useEffect(() => {
    getSunriseTime(weather);
    //getSunsetTime(weather);
  },[weather]);

  // functions to get sunrise and sunset time
  const getSunriseTime = (weather) => {
    let sunriseTime = new Date((weather.sys.sunrise + weather.timezone) * 1000);
    let sunriseTimeLocale = 
      sunriseTime.setMinutes(sunriseTime.getMinutes() + sunriseTime.getTimezoneOffset());
    setSunriseTimeShort(sunriseTime.toLocaleTimeString("sv-SE", {timeStyle: "short"}));
    console.log(sunriseTimeShort);
  };

  // const getSunsetTime = (weather) => {
  //   let sunsetTime = new Date((weather.sys.sunset + weather.timezone) * 1000);
  //   let sunsetTimeLocale = 
  //   sunsetTime.setMinutes(sunsetTime.getMinutes() + sunsetTime.getTimezoneOffset());
  //   setSunsetTimeShort(sunsetTime.toLocaleTimeString("sv-SE", {timeStyle: "short"}));
  //   console.log(sunsetTimeShort);
  // };

  return (
    <div>
      <span>sunrise</span>
      <span>{sunriseTimeShort}</span>
    </div>
  );
};

export default Sunrise;
