import React from "react";
import "../mainWindow/window.css";
import "../mainWindow/heisenberg.svg";
import { Switch, Route } from "react-router-dom";
import NewsContain from "./NewsContain";
import Outlines from "./Outlines";
import Rate from "./rate";
import RegistrPage from "./registPage";
import Tests from "./testing";
import AdminNewsContainer from "../admin/adminContaier";

function MainWindow(props) {
  return (
    <main id="promo" className="promo">
      <Switch>
        <Route path="/news" render={() => <NewsContain></NewsContain>}></Route>
        <Route path="/registPage" component={RegistrPage}></Route>
        <Route path="/rate" component={Rate}></Route>
        <Route path="/Outlines" component={Outlines}></Route>
        <Route path="/testing" component={Tests}></Route>
        <Route
          path="/adminNewsContaner"
          render={() => <AdminNewsContainer></AdminNewsContainer>}
        ></Route>
      </Switch>
    </main>
  );
}
export default MainWindow;
