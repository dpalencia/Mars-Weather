import React from "react"
import TitleBar from "./TitleBar"
function WeatherBox(props) {
    console.log(props);
    return (
        <div id="weatherBox">
            <TitleBar title={props.title} />
            {props.children}
        </div>
    );
}
export default WeatherBox