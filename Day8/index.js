import React from "react";
import ReactDOM from "react-dom/client";
import UserClass from "./component/UserClass";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ChildofChild from "./component/ChildofChild";



const heading = React.createElement("h1",{},"Hello World");


const root = ReactDOM.createRoot(document.getElementById("root"));


const AppLayout = ()=>{
    return (
        <UserClass/>
    )
}


const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>
    },
    {
        path:"/child",
        element:<ChildofChild/>
    }

])


root.render(<RouterProvider router={appRouter}/>);