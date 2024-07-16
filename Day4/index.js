import React from "react";
import ReactDOM from "react-dom";
import HeadComponent from "./Components/HeadComponent";

const heading = React.createElement("h1",{},"Hello");


const AppComponent = ()=>{
    return (
        <>
            <HeadComponent/>
        </>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppComponent/>);