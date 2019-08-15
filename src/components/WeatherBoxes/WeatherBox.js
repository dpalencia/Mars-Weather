import React from "react"
import WeatherTitle from "./WeatherTitle"

function NoData() {
    return (
        <div className="noData">
            <div>
                <h3>No data!</h3>
                <p>Tell InSight to get on it.</p>
            </div>
        </div>
    )
}

function WeatherBox(props) {
    return (
        <div className="weatherBox" style={{gridArea: props.gridName}}>
            <WeatherTitle title={props.title} />
            {props.status ? props.children : <NoData />}
        </div>
    );
}
export default WeatherBox