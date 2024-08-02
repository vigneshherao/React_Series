import React from "react";
import ReactDOM from "react-dom/client";
import HeadComponent from "./component/HeadComponent";
import BodyComponent from "./component/BodyComponent";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Element from "./component/Element";
import Error from "./component/Error";
import { Outlet } from "react-router-dom";
import ProductDetail from "./component/ProductDetail";

//Creating react element with react core
const heading = React.createElement("h1", {}, "Hello This is vignesh");

//same thing using jsx

const head = <h1>This is vignesh H E</h1>;

//React has the root which is called head node which renders in dom
const root = ReactDOM.createRoot(document.getElementById("root"));

//creating the functional component

const AppComponent = () => {
  return (
    <>
      <HeadComponent />
      <Outlet/>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppComponent />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <BodyComponent />,
      },
      {
        path: "/login",
        element: <Element />,
        errorElement: <Error />,
      },
      {
        path: "/product/:productId",
        element: <ProductDetail />,
        errorElement: <Error />,
      },
    ],
  },
]);

root.render(<RouterProvider router={appRouter} />);
