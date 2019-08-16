import React from "react"


function DateBtn(props) {
    console.log(props.value)
    return(
        <button value={props.value} onClick={props.handler}>
            {props.value}
        </button>
    )
}

export default DateBtn