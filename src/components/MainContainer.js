import React, {useState, useEffect} from "react"
import WContainer from "./WeatherBoxes/WContainer"
import DateBtn from "./DateBtn"
function MainContainer() {
    const [weatherData, setWeatherData] = useState(null)
    const [currentDay, setCurrentDay] = useState(null);
    const [solArr, setSolArr] = useState([])
    let dateObj = currentDay ? new Date(weatherData[currentDay].First_UTC) : ""
    let dateString = dateObj ? `${dateObj.getUTCMonth() + 1}/${dateObj.getUTCDate()}/${dateObj.getUTCFullYear()}` : null
    function dayHandler(e) {
        setCurrentDay(e.target.value)
    }

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
            setSolArr(json.sol_keys.map(sol => <DateBtn date={dateString} value={sol} handler={dayHandler} key={sol} />))
        })
    }, []);


    return (
        <div id="mainContainer">
            <div id="mainTitle">
                <h1>{dateObj ? `${dateString} - Sol ${currentDay}`
                 : "Loading..."}</h1>
            </div>
            {weatherData && currentDay ? 
                <WContainer weatherVals={weatherData} day={currentDay} /> : 
                `Loading...`
            }
            <div id="prevDays">
                <h3>Previous Days</h3>
                {solArr}
            </div>
        </div>
    )
}

export default MainContainer