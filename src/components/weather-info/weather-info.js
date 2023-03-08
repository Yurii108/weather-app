

const WeatherInfo = () => {
    return (
        <div className="row px-3 mt-3 mb-3">
            <h1 className="large-font mr-3">26&#176;</h1>
            <div className="d-flex flex-column mr-3">
                <h2 className="mt-3 mb-0">London</h2>
                <small>10:36 - Tuesday, 22 Oct '19</small>
            </div>
            <div className="d-flex flex-column text-center">
                <h3 className="fa fa-sun-o mt-4">{null}</h3>
                <small>Sunny</small>
            </div>
        </div>
    )
};

export default WeatherInfo;