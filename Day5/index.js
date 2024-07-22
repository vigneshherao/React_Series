import React from "react";
import ReactDOM from "react-dom/client";
import HeadComponent from "./component/HeadComponent";
import BodyComponent from "./component/BodyComponent";


//Creating react element with react core
const heading = React.createElement("h1",{},"Hello This is vignesh");

//same thing using jsx

const head = <h1>This is vignesh H E</h1>;

//React has the root which is called head node which renders in dom 
const root = ReactDOM.createRoot(document.getElementById("root"));




//creating the functional component 

const AppComponent = () =>{
    return (
        <>
         <HeadComponent/>
         <BodyComponent/>
        </>
    )
}




root.render(<AppComponent/>);