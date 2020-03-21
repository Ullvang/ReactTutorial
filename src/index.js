import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// const element = React.createElement("h1", null, "Welcome to React Programming");

// ReactDOM.render(element, document.getElementById("root"));

const element = React.createElement(
  "div",
  { className: "testClass" },
  React.createElement("h1", null, "Welcome to React"),
  React.createElement("h1", null, "Understanding the Creation of Elements")
);

ReactDOM.render(element, document.getElementById("root"));

// const element = <h1 className="testClass">Welcome to React Programming..</h1>;
// ReactDOM.render(element, document.getElementById("root"));

// const newElement = (
//   <h1 className="testClass">Understanding the Creation of Elements</h1>
// );
// ReactDOM.render(newElement, document.getElementById("root"));

// const element = (
//   <div className="testClass">
//     <h1>Welcome to React Programming...</h1>
//     <h1>Understanding the Creation of React Elements...</h1>
//   </div>
// );

// ReactDOM.render(element, document.getElementById("root"));
