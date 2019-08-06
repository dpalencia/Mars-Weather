import React from "react"
import TitleMain from "./TitleMain"
import TitleLocation from "./TitleLocation"

function TitleBar() {
    return (
        <div id="titleBar">
            <TitleMain id="titleMain" title="Weather" />
            <TitleLocation id="titleLocation" planet="Mars, Sol" location="Elysium Planitia" />
        </div>
    )
}

export default TitleBar