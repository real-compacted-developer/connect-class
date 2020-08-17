import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import StudyRoomPage from "./pages/StudyRoomPage";

class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/study/:id" component={StudyRoomPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
