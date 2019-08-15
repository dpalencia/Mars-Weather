import React from "react"

function UnitButton(props) {
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

export default UnitButton