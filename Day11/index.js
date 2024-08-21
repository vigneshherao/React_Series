import React from "react";
import ReactDOM from "react-dom/client";
import HOC from "./components/HOC";



// const heading = React.createElement("h2",{},"Hello this is Vignesh H E");

const App = ()=>{
    return (
        <HOC/>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(<App/>);