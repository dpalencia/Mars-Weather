import React from "react"
function WeatherTitle(props) {
    return (
        <div className="titleBar">
            <h3>{props.title}</h3>
        </div>
    );
}
export default WeatherTitle