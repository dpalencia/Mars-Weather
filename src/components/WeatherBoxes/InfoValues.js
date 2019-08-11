import React from "react"

function InfoLine(props) {
    return(
        <div className="infoLine">
            <div className="infoName"><h4>{props.name}</h4></div>
            <div className="infoVal">{props.info}</div>
        </div>
    )
}

function InfoValues(props) {
    return (
        <div className="infoValues">
            <InfoLine name={props.maxName} info={props.maxVal} />
            <InfoLine name={props.avName} info={props.avVal} />
            <InfoLine name={props.minName} info={props.minVal} />
        </div>
    )
}


export default InfoValues