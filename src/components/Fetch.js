import { useState, useEffect } from "react";
import axios from "axios";
import Sunrise from "./Sunrise";

const Fetch = () => {
  const [ weather, setWeather ] = useState({});

  const APIKey = process.env.REACT_APP_APIKEY;
  let city = "";

  // fetch data
  useEffect(() => {
    fetchWeather("Los Angeles");
  },[]);

  // function to fetch API
  
  // const fetchWeather = (city) => { 
  //   const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`;
  //   axios
  //     .get(url)
  //     .then((response) => {
  //       setWeather(response.data);
  //       return response;
  //     })
  //     .catch(error => {
  //       console.log(error.response.status)
  //     });
  // };
  const fetchWeather = async (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`;
    let response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setWeather(data);
  };

  return (
    <header>
      {/* <div>
        <p>{weather.main.temp}&deg;C</p>
        <p>{weather.name}</p>
        <p>{weather.weather[0].main}</p>
      </div> */}

      <Sunrise />
    </header>
  );
};

export default Fetch;

// my key: fbb34d8403102e377ffd87aab22322ed