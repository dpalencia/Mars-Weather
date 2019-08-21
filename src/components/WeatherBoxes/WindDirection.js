import React from "react"

function WindDirection(props) {
    if(props.commonDirection) {
        return (
            <div id="windDirection" className="flex">
                <div>
                    Direction
                </div>
                <div className="arrowContainer bold altTextColor">
                    <i 
                        style={{transform: `rotate(${props.commonDirection.compass_degrees - 90}deg)`}} 
                        class="fa fa-arrow-circle-o-right" a
                        ria-hidden="true"></i>
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