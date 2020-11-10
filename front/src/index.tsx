import React from "react";
import ReactDOM from "react-dom";
import dotenv from 'dotenv';
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import ReduxThunk from "redux-thunk";

import * as serviceWorker from "./serviceWorker";
import Router from "./router";
import rootReducer from "./modules";
import { composeWithDevTools } from "redux-devtools-extension";

import "./stylesheets/main.css";

dotenv.config();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(ReduxThunk))
);

const index = (
  <React.StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </React.StrictMode>
);

export const socket = ReactDOM.render(index, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
