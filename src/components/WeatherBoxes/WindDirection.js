import React from "react"

function WindDirection(props) {
    if(props.commonDirection) {
        return (
            <div id="windDirection" className={`flex flexHalfLeft`}>
                <div>
                    Direction
                </div>
                <div className="arrowContainer bold altTextColor">
                    <div style={{transform: `rotate(${props.commonDirection.compass_degrees - 90}deg)`}}>
                        →
                    </div>
                </div>
                <div className="altTextColor bold">
                    {props.commonDirection.compass_point}
                </div>
            </div>
        )
    }
    else return "No data"
}

export default WindDirection