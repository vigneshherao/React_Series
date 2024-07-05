//The heading is not an heading tag ! it is object a react element which have childs with props
const heading = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Hello This is heading"),
    React.createElement("h1", {}, "Hello This is heading"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Hello This is heading"),
    React.createElement("h1", {}, "Hello This is heading"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
