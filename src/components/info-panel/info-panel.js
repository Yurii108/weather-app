

const InfoPanel = () => {
    return (
        <div className="mr-5">
            <p className="light-text suggestion">Birmingham</p>
            <p className="light-text suggestion">Manchester</p>
            <p className="light-text suggestion">New York</p>
            <p className="light-text suggestion">California</p>

            <div className="line my-5"></div>

            <p>Weather Details</p>
            <div className="row px-3">
                <p className="light-text">Cloudy</p>
                <p className="ml-auto">12%</p>
            </div>
            <div className="row px-3">
                <p className="light-text">Humidity</p>
                <p className="ml-auto">78%</p>
            </div>
            <div className="row px-3">
                <p className="light-text">Wind</p>
                <p className="ml-auto">1km/h</p>
            </div>
            <div className="row px-3">
                <p className="light-text">Rain</p>
                <p className="ml-auto">0mm</p>
            </div>

            <div className="line mt-3"></div>
        </div>
    )
};

export default InfoPanel;