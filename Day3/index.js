import React from "react";
import ReactDOM from "react-dom";



const heading = React.createElement("h1",{},"Hello This is vignesh");

//this babel will converts the jsx into react create element
const jsxHead = <h2>Hellow</h2>

const BoxHeadComponent = () =>{
    return (
        <div>
            <h2>Box Component</h2>
            <p>This is paragraph</p>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BoxHeadComponent/>);
