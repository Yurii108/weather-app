import Background from "../app-background/background";
import WeatherInfo from "../weather-info/weather-info";
import SearchPanel from "../search-panel/search-panel";
import InfoPanel from "../info-panel/info-panel";

import './app.css';

const App = () => {
    return (
        <div className="container-fluid px-1 px-sm-3 py-5 mx-auto">
            <div className="row d-flex justify-content-center">
                <div className="row card0">
                    <div className="card1 col-lg-8 col-md-7">
                        <Background />
                        <WeatherInfo />
                    </div>

                    <div className="card2 col-lg-4 col-md-5">
                        <SearchPanel />
                        <InfoPanel />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App;