import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import Router from "./router";
import io from "socket.io-client";

import "./stylesheets/main.css";

const index = (
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);

export const socket = io.connect("http://localhost:8080");

ReactDOM.render(index, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
