import React, {useState} from "react"
import WeatherBox from "./WeatherBox"
import InfoValues from "./InfoValues"
import UnitButton from "../UnitButton"



function WeatherBoxes(props) {
    let wind = props.weatherVals[props.day].HWS
    let pressure = props.weatherVals[props.day].PRE
    const [temp, setTemp] = useState(
        {
            unit: "F",
            av: Math.ceil(props.weatherVals[props.day].AT.av),
            mn: Math.ceil(props.weatherVals[props.day].AT.mn),
            mx: Math.ceil(props.weatherVals[props.day].AT.mx)
        }
    )
    function tempConversion(e) {
        if(e.value === "F") {
            setTemp(prevTemp => ({...prevTemp, ...{unit: "C"}}))
        }
        else {
            setTemp(prevTemp => ({...prevTemp, ...{unit: "F"}}))
        }
    }
    return (
        <div id="wGrid">
            <WeatherBox title="Temperature" gridName="temp">
                <InfoValues
                  maxName="High"
                  minName="Low" 
                  avName="Average" 
                  maxVal={temp.mx}
                  minVal={temp.mn}
                  avVal={temp.av}
                  unit={temp.unit}
                />
                <div id="scaleContainer">
                <h4>Scale</h4>
                <UnitButton text="F" handler={tempConversion} />
                <UnitButton text="C" handler={tempConversion} />
            </div>
            </WeatherBox>
            <WeatherBox title="Pressure" gridName="pressure">
                <InfoValues
                    maxName="Max"
                    minName="Min"
                    avName="Average"
                    maxVal={pressure.mx}
                    minVal={pressure.mn}
                    avVal={pressure.av}
                />
            </WeatherBox>
            <WeatherBox title="Wind Speed" gridName="weather">
                <InfoValues
                    maxName="Max"
                    minName="Min"
                    avName="Average"
                    maxVal={wind.mx}
                    minVal={wind.mn}
                    avVal={pressure.av}    
                />
            </WeatherBox>
         </div>
    )
}


export default WeatherBoxes