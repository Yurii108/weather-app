import { useState, useEffect } from "react";
import { useWeatherServices } from "../../services/weather-services";

const WeatherInfo = () => {
    const [weatherData, setWeatherData] = useState(null);

    const { getWeatherOfCity } = useWeatherServices();


    useEffect(() => {

        getWeatherOfCity('khust')
            .then(data => {
                setWeatherData(data)
                console.log(data)
            })
        // eslint-disable-next-line
    }, [])


    return (
        <div className="row px-3 mt-3 mb-3">
            {
                weatherData ? (
                    <>
                        <h1 className="large-font mr-3">{Math.round(weatherData.main.temp - 273.15)}&#176;</h1>
                        <div className="d-flex flex-column mr-3">
                            <h2 className="mt-3 mb-0">{weatherData.name}</h2>
                            <small>10:36 - Tuesday, 22 Oct '19</small>
                        </div>
                        <div className="d-flex flex-column text-center">
                            <h3 className="fa fa-sun-o mt-4">{null}</h3>
                            <small>{weatherData.weather[0].description}</small>
                        </div>
                    </>
                )
                    :
                    (<p>Loading weather data...</p>)
            }
        </div>
    )
};

export default WeatherInfo;