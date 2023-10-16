import { useEffect } from "react";

function Fetch() {
  const APIKey = process.env.REACT_APP_APIKEY;
  let city = "";

  useEffect(() => {
    fetchWeather("Tokyo");
  },[]);

  const fetchWeather = async (city) => { 
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);

      let cityName = data.name;
      let temp = data.main.temp;
      let weather = data.weather[0].main;
      console.log(`city: ${cityName}, temp: ${temp}, weather: ${weather}`);

      let sunrise = new Date(data.sys.sunrise * 1000);
      let sunriseHour = sunrise.getHours().toLocaleString("sv-SE", { minimumIntegerDigits: 2 });
      let sunriseMinutes = sunrise.getMinutes().toLocaleString("sv-SE", { minimumIntegerDigits: 2 });
      let sunset = new Date(data.sys.sunset * 1000);
      let sunsetHour = sunset.getHours().toLocaleString("sv-SE", { minimumIntegerDigits: 2 });
      let sunsetMinutes = sunset.getMinutes().toLocaleString("sv-SE", { minimumIntegerDigits: 2 });
      console.log(`
      sunrise: ${sunriseHour}:${sunriseMinutes}
      sunset: ${sunsetHour}:${sunsetMinutes}
      `)

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
