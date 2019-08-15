import React, {useState} from "react"
import WeatherBox from "./WeatherBox"
import InfoValues from "./InfoValues"
import UnitButton from "../UnitButton"

function WeatherBoxes(props) {
    /* Defining these vars to make later data access easier */
    let jsonTemp = props.weatherVals[props.day].AT
    let jsonWind = props.weatherVals[props.day].HWS
    let windData = jsonWind ? [
        jsonWind.mx,
        jsonWind.mn,
        jsonWind.av
    ] : null
    let windFuncs = jsonWind ? {
        mph: () => windData.map((num) => Math.round(num * 2.237)),
        ["m/s"]: () => windData.map(num => Math.round(num)) // Miles/hour -> Meters/second conversion
    } : null
    const [windUnit, setWindUnit] = useState(jsonWind ? "m/s" : null)
    const [wind, setWind] = useState(jsonWind ? windFuncs["m/s"]() : null)

    let jsonPressure = props.weatherVals[props.day].PRE

    let tempData = [
        jsonTemp.mx,
        jsonTemp.mn,
        jsonTemp.av
    ]


    let pressureData = [
        jsonPressure.mx,
        jsonPressure.mn,
        jsonPressure.av
    ]

    let tempFuncs = {
        C: () => tempData.map((num) => Math.round(num)),
        F: () => tempData.map((num) => Math.round(num * 1.8 + 32)), // C -> F conversion 
        K: () => tempData.map((num) => Math.round(num + 273.15)) // C -> K conversion
    }



    const [temp, setTemp] = useState(tempFuncs.C())
    const [tempUnit, setTempUnit] = useState("C")


    // Don't need to manage state for pressure, so we can just make it a regular variable
    let pressure = pressureData.map(num => Math.round(num))

    function tempHandler(e) {
        e.persist()
        setTempUnit(e.target.value)
        setTemp(tempFuncs[e.target.value])
    }

    function windHandler(e) {
        e.persist()
        setWindUnit(e.target.value)
        setWind(windFuncs[e.target.value])
    }


    return (
        <div id="wGrid">

            <WeatherBox title="Temperature" gridName="temp">

                <InfoValues
                  maxName="High"
                  minName="Low" 
                  avName="Average" 
                  maxVal={temp[0]}
                  minVal={temp[1]}
                  avVal={temp[2]}
                  unit={tempUnit}
                />
                <div id="scaleContainer">
                <h4>Scale</h4>
                <UnitButton text="F" handler={tempHandler} currentUnit={tempUnit} />
                <UnitButton text="C" handler={tempHandler} currentUnit={tempUnit} />
                <UnitButton text="K" handler={tempHandler} currentUnit={tempUnit} />
            </div>
            </WeatherBox>

            <WeatherBox title="Pressure" gridName="pressure">
                <InfoValues
                    maxName="Max"
                    minName="Min"
                    avName="Average"
                    maxVal={pressure[0]}
                    minVal={pressure[1]}
                    avVal={pressure[2]}
                    unit="Pa"
                />
            </WeatherBox>

            <WeatherBox title="Wind Speed" gridName="weather">
            {jsonWind ? 
                <div>
                    <InfoValues
                        maxName="Max"
                        minName="Min"
                        avName="Average"
                        maxVal={wind[0]}
                        minVal={wind[1]}
                        avVal={wind[2]}   
                        unit={windUnit} 
                    />
                    <UnitButton 
                        text="mph" 
                        handler={windHandler}
                        currentUnit={windUnit}
                    />
                    <UnitButton 
                        text="m/s" 
                        handler={windHandler}
                        currentUnit={windUnit}
                    />
                </div>               
                :
                <h3>No wind data!</h3>
            }

            </WeatherBox>

         </div>
    )
}


export default WeatherBoxes