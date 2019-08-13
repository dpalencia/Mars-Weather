import React, {useState, useEffect} from "react"
import WContainer from "./WeatherBoxes/WContainer"

function MainContainer() {
    const [weatherData, setWeatherData] = useState(null)
    const [currentDay, setCurrentDay] = useState(null);

    useEffect(function() {
        fetch('https://mars.nasa.gov/rss/api/?feed=weather&category=insight&feedtype=json&ver=1.0')
        .then((response) => response.json())
        .then(function(json) {
           setWeatherData(json)
           return json
        })
        .then(function(json) {
            let solKeysLength = json.sol_keys.length
            setCurrentDay(json.sol_keys[solKeysLength - 1])
        })
    }, []);

    return (
        <div id="mainContainer">
            <div id="mainTitle">
                <h1>7/20/19 - Sol 233</h1>
            </div>
            {weatherData && currentDay ? 
                <WContainer weatherVals={weatherData} day={currentDay} /> : 
                `Loading...`
            }
        </div>
    )
}

export default MainContainer