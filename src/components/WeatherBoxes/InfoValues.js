import React from "react"

function InfoLine(props) {
    return(
        <div className="infoLine flex">
            <div className={`infoName ${props.orientation === "vertical" ? "flexHalfLeft": ""}`}><h4>{props.name}</h4></div>
            <div className={`infoVal ${props.orientation === "vertical" ? "flexHalfRight": ""}`}>{`${props.info} ${props.unit}`}</div>
        </div>
    )
}

function InfoValues(props) {
    return (
        <div className={`infoValues flex ${props.orientation}`}>
            <InfoLine orientation={props.orientation} name={props.maxName} info={props.maxVal} unit={props.unit} /> 
            <InfoLine orientation={props.orientation}name={props.avName} info={props.avVal} unit={props.unit}/>
            <InfoLine orientation={props.orientation} name={props.minName} info={props.minVal} unit={props.unit}/>
        </div>
    )
}


export default InfoValues