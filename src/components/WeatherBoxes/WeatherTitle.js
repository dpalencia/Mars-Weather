import React from "react"
function WeatherTitle(props) {
    return (
        <div className="titleBar">
            <h2>{props.title}</h2>
        </div>
    );
}
export default WeatherTitle