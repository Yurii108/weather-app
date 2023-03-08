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
      <div class="container-fluid px-1 px-sm-3 py-5 mx-auto">
        <div class="row d-flex justify-content-center">
          <div class="row card0">
            <div class="card1 col-lg-8 col-md-7">
              <small>the.weather</small>
              <div class="text-center">
                <img class="image mt-5" src="https://i.imgur.com/M8VyA2h.png" />
              </div>
              <div class="row px-3 mt-3 mb-3">
                <h1 class="large-font mr-3">26&#176;</h1>
                <div class="d-flex flex-column mr-3">
                  <h2 class="mt-3 mb-0">London</h2>
                  <small>10:36 - Tuesday, 22 Oct '19</small>
                </div>
                <div class="d-flex flex-column text-center">
                  <h3 class="fa fa-sun-o mt-4"></h3>
                  <small>Sunny</small>
                </div>
              </div>
            </div>
            <div class="card2 col-lg-4 col-md-5">
              <div class="row px-3">
                <input type="text" name="location" placeholder="Another location" class="mb-5" />
                <div class="fa fa-search mb-5 mr-0 text-center"></div>
              </div>
              <div class="mr-5">
                <p class="light-text suggestion">Birmingham</p>
                <p class="light-text suggestion">Manchester</p>
                <p class="light-text suggestion">New York</p>
                <p class="light-text suggestion">California</p>

                <div class="line my-5"></div>

                <p>Weather Details</p>
                <div class="row px-3">
                  <p class="light-text">Cloudy</p>
                  <p class="ml-auto">12%</p>
                </div>
                <div class="row px-3">
                  <p class="light-text">Humidity</p>
                  <p class="ml-auto">78%</p>
                </div>
                <div class="row px-3">
                  <p class="light-text">Wind</p>
                  <p class="ml-auto">1km/h</p>
                </div>
                <div class="row px-3">
                  <p class="light-text">Rain</p>
                  <p class="ml-auto">0mm</p>
                </div>

                <div class="line mt-3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

// {
//   weatherData ? (
//     <div>
//       <h2>Current Weather in {weatherData.name}</h2>
//       <p>Temperature: {(weatherData.main.temp - 273.15)}  K</p>
//       <p>Humidity: {weatherData.main.humidity}</p>
//       <p>Weather: {weatherData.weather[0].description}</p>
//     </div>
//   ) : (
//     <p>Loading weather data...</p>
//   )
// }

export default Weather;