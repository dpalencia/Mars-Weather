import React from "react"
function TitleBar(props) {
    return (
        <div className="titleBar">
            <h3>{props.title}</h3>
        </div>
    );
}
export default TitleBar