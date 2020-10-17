import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import StudyRoomPage from "./pages/StudyRoomPage";
import StudyCreatePage from "./pages/StudyCreatePage";
import MainPage from "./pages/MainPage";

class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/study/create" component={StudyCreatePage} />
          <Route exact path="/study/:id" component={StudyRoomPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
