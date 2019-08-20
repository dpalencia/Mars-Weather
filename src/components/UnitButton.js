import React from "react"

function UnitButton(props) {
    if(props.handler) {
        return(
            <button 
                onClick={props.handler} 
                value={props.value} 
                className={`unitbtn${props.currentUnit === props.value ? " selected" : ""}`}
            >
                {props.text}
            </button>
        )
    }
    else return ("")
}

export default UnitButton