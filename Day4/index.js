import React from "react";
import ReactDOM from "react-dom/client";
import HeadComponent from "./Components/HeadComponent";
import BodyComponent from "./components/BodyComponent";

const heading = React.createElement("h1",{},"Hello");


const AppComponent = ()=>{
    return (
        <>
            <HeadComponent/>
            <BodyComponent/>
        </>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppComponent/>);