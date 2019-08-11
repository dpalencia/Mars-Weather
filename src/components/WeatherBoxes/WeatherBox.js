import React from "react"
import WeatherTitle from "./WeatherTitle"
function WeatherBox(props) {
    console.log(props.gridName)
    return (
        <div className="weatherBox" style={{gridArea: props.gridName}}>
            <WeatherTitle title={props.title} />
            {props.children}
        </div>
    );
}
export default WeatherBox