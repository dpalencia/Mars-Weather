import React from "react"
import WeatherBox from "./WeatherBox"

function WeatherBoxes() {
    return (
        <div id="wGrid">
            <WeatherBox title="Temperature" gridName="temp">
                    Some Content
            </WeatherBox>
            <WeatherBox title="Pressure" gridName="pressure">
                    Some more content
            </WeatherBox>
            <WeatherBox title="Wind Speed" gridName="weather">
                Wind Speed
            </WeatherBox>
         </div>
    )
}


export default WeatherBoxes