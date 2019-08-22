import React from "react"

function WindDirection(props) {
    if(props.commonDirection) {
        return (
            <div id="windDirection" className="flex flexVertCenter">
                <div className="flexHalfLeft">
                    Direction
                </div>
                <div className="flexHalfRight flex">
                    <div className="altTextColor bold">
                        {props.commonDirection.compass_point}
                    </div>
                    <div className="arrowContainer bold altTextColor">
                        <i 
                            style={{transform: `rotate(${props.commonDirection.compass_degrees - 90}deg)`}} 
                            class="fa fa-arrow-circle-o-right"
                            ria-hidden="true"></i>
                    </div>

                </div>
            </div>
        )
    }
    else return "No data"
}

export default WindDirection