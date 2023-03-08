import React, { useState, useEffect } from 'react';

import './weather.css';

function Weather() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=khust,UA&appid=9a7c546a676490e384ce2748d12424af`;

    fetch(apiURL)
      .then(response => response.json())
      .then(data => {
        setWeatherData(data)
        console.log(data)
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <>
      {
        weatherData ? (
          <div>
            <h2>Current Weather in {weatherData.name}</h2>
            <p>Temperature: {(weatherData.main.temp - 273.15)}  K</p>
            <p>Humidity: {weatherData.main.humidity}</p>
            <p>Weather: {weatherData.weather[0].description}</p>
          </div>
        ) : (
          <p>Loading weather data...</p>
        )
      }
    </>
  );
}



export default Weather;