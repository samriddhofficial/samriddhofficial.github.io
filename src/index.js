import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

function toggleNav() {
  document.body.classList.toggle("nav-open");
}
ReactDOM.render(<App />, document.getElementById("root"));
