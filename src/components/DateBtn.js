import React from "react"

function DateBtn(props) {
    console.log(props.date)
    return(
        <button value={props.value} onClick={props.handler}>
            {props.date}
        </button>
    )
}

export default DateBtn