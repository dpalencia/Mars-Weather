import React, {useState, useEffect} from "react"
import WeatherBox from "./WeatherBox"
import InfoValues from "./InfoValues"
import UnitButton from "../UnitButton"
import WindDirection from "./WindDirection"
function WeatherBoxes(props) {
    /* Defining these vars to make later data access easier */
    let windData, windFuncs = null
    let jsonWind = props.weatherVals[props.day].HWS
    if(jsonWind) {
        windData = [
            jsonWind.mx,
            jsonWind.mn,
            jsonWind.av
        ]
        windFuncs = {
            mph: () => windData.map((num) => (num * 2.237).toFixed(1)),
            ["m/s"]: () => windData.map(num => num.toFixed(1)) // Miles/hour -> Meters/second conversion
        }
    }
    const [windUnit, setWindUnit] = useState(jsonWind ? "m/s" : "")
    const [wind, setWind] = useState(jsonWind ? windFuncs["m/s"]() : [null, null, null])

    let windDirection = props.weatherVals[props.day].WD.most_common 
    ? props.weatherVals[props.day].WD.most_common  : null

    // Don't need to manage state for pressure, so we can just make it a regular variable
    let jsonPressure = props.weatherVals[props.day].PRE
    let pressureData = null;
    let pressure = [null, null, null]
    if(jsonPressure) {
        pressureData = [
            jsonPressure.mx,
            jsonPressure.mn,
            jsonPressure.av
        ]
        pressure = pressureData.map(num => num.toFixed(1))
    }

    
    let jsonTemp = props.weatherVals[props.day].AT
    let tempData, tempFuncs = null
    if(jsonTemp) {
        tempData = [
            jsonTemp.mx,
            jsonTemp.mn,
            jsonTemp.av
        ]
        tempFuncs = {
            C: () => tempData.map((num) => num.toFixed(1)),
            F: () => tempData.map((num) => (num * 1.8 + 32).toFixed(1)), // C -> F conversion 
            K: () => tempData.map((num) => (num + 273.15).toFixed(1)) // C -> K conversion
        }
    }
    const [temp, setTemp] = useState(jsonTemp ? tempFuncs.C() : [null, null, null])
    const [tempUnit, setTempUnit] = useState(jsonTemp ? "C" : null)

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

    /* Update state after every render; every time date gets updated */
    /* Preserve previous units, but with new numbers from new day */
    useEffect(function() {
        setWind(jsonWind ? windFuncs[windUnit]() : "")
        setTemp(jsonTemp ? tempFuncs[tempUnit]() : [null, null, null])
    });

    return (
        <div id="wGrid">
            <WeatherBox id="wind" title="Wind" gridName="wind" status={jsonWind && windDirection}>
                    <InfoValues
                        maxName="Max"
                        minName="Min"
                        avName="Average"
                        maxVal={wind[0]}
                        minVal={wind[1]}
                        avVal={wind[2]}   
                        unit={windUnit} 
                        orientation="vertical"

                    />
                    <WindDirection commonDirection={windDirection} />
                    <div id="windUnits" className="btnContainer ">
                        <UnitButton 
                            text="mph" 
                            value="mph"
                            handler={windHandler}
                            currentUnit={windUnit}
                        />
                        <UnitButton 
                            text="m/s"
                            value="m/s"
                            handler={windHandler}
                            currentUnit={windUnit}
                        /> 
                    </div>

            </WeatherBox>
            <WeatherBox title="Temperature" gridName="temp" status={jsonTemp}>
                <InfoValues
                  maxName="High"
                  minName="Low" 
                  avName="Average" 
                  maxVal={temp[0]}
                  minVal={temp[1]}
                  avVal={temp[2]}
                  unit={`${tempUnit === "K" ? tempUnit : "°" + tempUnit}`}
                  orientation="horizontal"
                />
                <div id="scaleContainer" className="flex">
                    
                    <div id="scaleContainerInner">
                        <UnitButton 
                            text="°F" 
                            value="F" 
                            handler={tempHandler} 
                            currentUnit={tempUnit} 
                        />
                        <UnitButton 
                            text="°C" 
                            value="C"
                            handler={tempHandler} 
                            currentUnit={tempUnit} />
                        <UnitButton 
                            text="K" 
                            value="K" 
                            handler={tempHandler} 
                            currentUnit={tempUnit} 
                        />
                    </div>
                </div>
            </WeatherBox>

            <WeatherBox title="Pressure" gridName="pressure" status={jsonPressure}>
                <InfoValues
                    maxName="Max"
                    minName="Min"
                    avName="Average"
                    maxVal={pressure[0]}
                    minVal={pressure[1]}
                    avVal={pressure[2]}
                    unit="Pa"
                    orientation="horizontal"
                />
            </WeatherBox>
         </div>
    )
}


export default WeatherBoxes