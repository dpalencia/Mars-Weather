import React from "react"
import WeatherBox from "./WeatherBox"
import InfoValues from "./InfoValues"

function WeatherBoxes() {
    return (
        <div id="wGrid">
            <WeatherBox title="Temperature" gridName="temp">
                <InfoValues
                  maxName="Max"
                  minName="Min" 
                  avName="Average" 
                  maxVal={20}
                  minVal={25}
                  avVal={30}
                />
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