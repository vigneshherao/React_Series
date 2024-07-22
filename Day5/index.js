import React from "react";
import ReactDOM from "react-dom/client";



//Creating react element with react core
const heading = React.createElement("h1",{},"Hello This is vignesh");

//React has the root which is called head node which renders in dom 
const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(heading);