import React from "react";
import "../mainWindow/window.css";
import "../mainWindow/heisenberg.svg";
import { Switch, Route, Redirect } from "react-router-dom";
import NewsContain from "./NewsContain";
import Outlines from "./Outlines";
import Rate from "./rate";
import RegistrPage from "./registPage";
import Tests from "./testing.js";
import AdminNewsContainer from "../admin/adminContaier";
import TestTheme from "./testTheme";
import Articles from "./articles.js";
import Exam from "./exam";
import AccInfo from "./AccInfo";

function MainWindow(props) {
  return (
    <main id="promo" className="promo">
      <Switch>
        <Route path="/news" render={() => <NewsContain></NewsContain>}></Route>
        {/* <Route path="/registPage" component={RegistrPage}></Route> */}
        <Route path="/rate" component={Rate}></Route>
        <Route path="/Outlines" component={Outlines}></Route>
        <Route path="/testing" component={Tests}></Route>
        <Route
          path="/adminNewsContaner"
          render={() => <AdminNewsContainer></AdminNewsContainer>}
        ></Route>
        <Route path="/test/:id" exact component={TestTheme}></Route>
        <Route path="/articles" component={Articles}></Route>
        <Route path="/exam" component={Exam}></Route>
        <Route path="/account" component={AccInfo} />
        <Redirect to="/testing" />
      </Switch>
    </main>
  );
}
export default MainWindow;
