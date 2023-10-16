import { useEffect } from 'react';

function Fetch() {
  const APIKey = process.env.REACT_APP_APIKEY;
  let city = "";
  

  useEffect(() => {
    fetchWeather("London");
  },[]);


  const fetchWeather = async (city) => { 
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.log(err.response.status);
    }
  };

  return (
    <div>
      
    </div>
  )
}

export default Fetch
