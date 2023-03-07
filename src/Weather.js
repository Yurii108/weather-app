// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

import React, { useState, useEffect } from 'react';

function App() {
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
    <div>
      {weatherData ? (
        <div>
          <h2>Current Weather in {weatherData.name}</h2>
          <p>Temperature: {(weatherData.main.temp - 273.15)}  K</p>
          <p>Humidity: {weatherData.main.humidity}</p>
          <p>Weather: {weatherData.weather[0].description}</p>
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
}

export default App;

// export default App;
