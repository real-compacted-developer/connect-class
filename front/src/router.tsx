import React, { useEffect } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import StudyRoomPage from "./pages/StudyRoomPage";
import StudyCreatePage from "./pages/StudyCreatePage";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import StudyDataRoomPage from "./pages/StudyDataRoomPage";
import { useDispatch } from "react-redux";
import { fetchUserAsync } from "./modules/user";
import PermissionRoute from "./components/common/PermissonRoute";

const Router: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserAsync());
  }, [dispatch]);

  const LoginRedirect = () => <Redirect to="/login" />;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route
          exact
          path="/study/create"
          component={StudyCreatePage}
        />
        <Route
          exact
          path="/dashboard/:id"
          component={StudyDataRoomPage}
        />
        <Route
          exact
          path="/study/:id"
          component={StudyRoomPage}
        />
        <Route exact path="/login" component={LoginPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
