import React from "react"
import WeatherTitle from "./WeatherTitle"

function NoData() {
    return (
        <div className="noData">
            <div>
                <h3>Missing data!</h3>
                <p>Tell NASA to get on it.</p>
            </div>
        </div>
    )
}

function WeatherBox(props) {
    return (
        <div className="weatherBox" style={{gridArea: props.gridName}}>
            <WeatherTitle title={props.title} />
            <div className="weatherBoxInner">
                {props.status ? props.children : <NoData />}
            </div>
        </div>
    );
}
export default WeatherBox