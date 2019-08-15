import React from "react"

function WindDirection(props) {
    return (
        <div>
            <div style={{transform: `rotate(${props.commonDirection.compass_degrees - 90}deg)`}}>→</div>
            {props.commonDirection.compass_point}
        </div>
    )
}

export default WindDirection