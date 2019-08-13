import React, {useState} from "react"
import WeatherBox from "./WeatherBox"
import InfoValues from "./InfoValues"
import UnitButton from "../UnitButton"



function WeatherBoxes(props) {
    let wind = props.weatherVals[props.day].HWS
    let pressure = props.weatherVals[props.day].PRE

    const ctoF = (temp) => temp * 1.8 + 32
    const ctoK = (temp) => temp + 273.15


    const [temp, setTemp] = useState(
        {
            unit: "C",
            av: Math.round(props.weatherVals[props.day].AT.av),
            mn: Math.round(props.weatherVals[props.day].AT.mn),
            mx: Math.round(props.weatherVals[props.day].AT.mx)
        }
    )
    function tempHandler(e) {
        /* Maybe do this conversion cleaner by using array map */
        e.persist()
        setTemp(tempConvert())
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
                <UnitButton text="F" handler={tempHandler} />
                <UnitButton text="C" handler={tempHandler} />
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