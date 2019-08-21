import React, {useState, useEffect} from "react"
import WContainer from "./WeatherBoxes/WContainer"
function MainContainer() {
    const [weatherData, setWeatherData] = useState(null)
    const [currentDay, setCurrentDay] = useState(null);
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
            let solKeysLength = json.sol_keys.length
            setCurrentDay(json.sol_keys[solKeysLength - 1])
        })
    }, []);


    return (
        <div id="mainContainer">
            <div id="mainTitle">
                <h2>{dateObj ? `${dateString} - Sol ${currentDay}`
                 : "Loading..."}</h2>
            </div>
            {weatherData && currentDay ? 
                <WContainer weatherVals={weatherData} day={currentDay} /> : 
                `Loading...`
            }
            <div id="prevDays">
                <h2>Previous Days</h2>
                <br />
                {weatherData ? weatherData.sol_keys.map(function(sol, i) {
                    let solDayObj = new Date(weatherData[sol].First_UTC)
                    let solDayString = `${solDayObj.getUTCMonth() + 1}/${solDayObj.getUTCDate()}/${solDayObj.getUTCFullYear()}`
                    return  <button
                                value={sol}
                                key={sol}
                                onClick={dayHandler}
                                className={`dateBtn
                                    ${currentDay === weatherData.sol_keys[i] ? " selected" : ""}`}
                            >
                                {solDayString}
                            </button>
                }) : null}
            </div>
        </div>
    )
}

export default MainContainer