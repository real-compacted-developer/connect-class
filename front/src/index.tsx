import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import Router from "./router";
import io from "socket.io-client";

import config from "./config";

import "./stylesheets/main.css";

const index = (
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);

export const socket = io.connect(config.API);

ReactDOM.render(index, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
