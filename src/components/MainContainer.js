import React, {useState, useEffect} from "react"
import WContainer from "./WeatherBoxes/WContainer"

function MainContainer() {
    let responseJSON = {testing: "Testing"}
    useEffect(function() {
        fetch('https://mars.nasa.gov/rss/api/?feed=weather&category=insight&feedtype=json&ver=1.0')
        .then((response) => response.json())
        .then(function(json) {responseJSON = json})
    }, [responseJSON]);
    console.log(responseJSON)
    return (
        <div id="mainContainer">
            <div id="mainTitle">
                <h1>7/20/19 - Sol 233</h1>
            </div>
            <WContainer />
        </div>
    )
}

export default MainContainer