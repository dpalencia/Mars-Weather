import React from "react"
import TitleBar from "./TitleBar"
function WeatherBox(props) {
    console.log(props.gridName)
    return (
        <div id="weatherBox" style={{gridArea: props.gridName}}>
            <TitleBar title={props.title} />
            {props.children}
        </div>
    );
}
export default WeatherBox