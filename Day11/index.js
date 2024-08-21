import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import HOC from "./components/HOC";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import Accord from "./components/Accord";
import UserContext from "./utils/UserContext";

const App = () => {
  const [user, setUser] = useState("fksdajksdaj");

  return (
    <>
      <UserContext.Provider value={{ names: user }}>
        <Link to={"/accord"}>
          <button>Accordian</button>
        </Link>
        <HOC />
      </UserContext.Provider>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/accord",
    element: <Accord />,
  },
]);

// const heading = React.createElement("h2",{},"Hello this is Vignesh H E");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
