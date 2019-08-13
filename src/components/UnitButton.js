import React from "react"

function UnitButton(props) {
    return(
        <button onClick={props.handler} value={props.text}>
            {props.text}
        </button>
    )
}

export default UnitButton