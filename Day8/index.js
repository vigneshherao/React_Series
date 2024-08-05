import React from "react";
import ReactDOM from "react-dom/client";
import UserClass from "./component/UserClass";



const heading = React.createElement("h1",{},"Hello World");


const root = ReactDOM.createRoot(document.getElementById("root"));


const AppLayout = ()=>{
    return (
        <UserClass/>
    )
}


root.render(<AppLayout/>);