import React from "react"

function InfoLine(props) {
    return(
        <div className="infoLine">
            <div className="infoName"><h4>{props.name}</h4></div>
            <div className="infoVal">{`${props.info} ${props.unit}`}</div>
        </div>
    )
}

function InfoValues(props) {
    return (
        <div className="infoValues">
            <InfoLine name={props.maxName} info={props.maxVal} unit={props.unit} /> 
            <InfoLine name={props.avName} info={props.avVal} unit={props.unit}/>
            <InfoLine name={props.minName} info={props.minVal} unit={props.unit}/>
        </div>
    )
}


export default InfoValues