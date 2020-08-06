import React from "react";
import { BrowserRouter, Route, Switch } from "react-router";
import StudyRoom from "./pages/StudyRoom";

class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/study/:id" component={StudyRoom} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
