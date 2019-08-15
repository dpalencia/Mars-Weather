import React from "react"

function UnitButton(props) {
    if(props.handler) {
        return(
            <button 
                onClick={props.handler} 
                value={props.text} 
                className={`unitbtn${props.currentUnit === props.text ? " selected" : ""}`}
            >
                {props.text}
            </button>
        )
    }
    else return ("")
}

export default UnitButton