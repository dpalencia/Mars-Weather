import React from "react"

function TitleLocation(props) {
    return (
        <div id="titleLocation">
            <h2>
                {props.planet}
            </h2>
            <h2>
                {props.location}
            </h2>
        </div>
    )
}

export default TitleLocation