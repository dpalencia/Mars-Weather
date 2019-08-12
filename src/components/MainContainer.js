import React, {useState, useEffect} from "react"
import WContainer from "./WeatherBoxes/WContainer"

function MainContainer() {
    const [weatherData, setResponse] = useState(null)
    useEffect(function() {
        fetch('https://mars.nasa.gov/rss/api/?feed=weather&category=insight&feedtype=json&ver=1.0')
        .then((response) => response.json())
        .then(json => setResponse(json))
    }, []);
    
    return (
        <div id="mainContainer">
            <div id="mainTitle">
                <h1>7/20/19 - Sol 233</h1>
                {weatherData ? weatherData[245]['AT']['av'] : ''}
            </div>
            <WContainer />
        </div>
    )
}

export default MainContainer