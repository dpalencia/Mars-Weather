import React from "react"

function UnitButton(props) {
    return(
        <button onClick={props.handler}>
            {props.text}
        </button>
    )
}

export default UnitButton