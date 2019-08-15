import React from "react"

function WindDirection(props) {
    if(props.commonDirection) {
        return (
            <div>
                <div style={{transform: `rotate(${props.commonDirection.compass_degrees - 90}deg)`}}>→</div>
                {props.commonDirection.compass_point}
            </div>
        )
    }
    else return "No data"
}

export default WindDirection