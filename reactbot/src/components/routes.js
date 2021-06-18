import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import MainWindow from "./mainWindow/mainWindow";
import RegistrPage from "./mainWindow/registPage";

export const useRoutes = (isAuth, props) => {
  if (isAuth) {
    return <MainWindow contain={props.contain}></MainWindow>;
  }
  return (
    <Switch>
      <Route path="/registPage" exact component={RegistrPage}></Route>
      <Redirect to="/registPage" />
    </Switch>
  );
};
