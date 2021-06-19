import React from "react";
import "../mainWindow/window.css";
import "../mainWindow/heisenberg.svg";
import { Switch, Route } from "react-router-dom";
import News from "./news";
import Outlines from "./Outlines";
import Rate from "./rate";
import RegistrPage from "./registPage";
import Tests from "./testing";
import AdminNews from "../admin/adminNews";

function MainWindow(props) {
  return (
    <main id="promo" className="promo">
      <Switch>
        <Route
          path="/news"
          render={() => <News news={props.contain.advertising}></News>}
        ></Route>
        <Route path="/registPage" component={RegistrPage}></Route>
        <Route path="/rate" component={Rate}></Route>
        <Route path="/Outlines" component={Outlines}></Route>
        <Route path="/testing" component={Tests}></Route>
        <Route
          path="/adminNews"
          render={() => (
            <AdminNews
              news={props.contain.advertising}
              addNews={props.addNews}
              updateNews={props.updateNews}
            ></AdminNews>
          )}
        ></Route>
      </Switch>
    </main>
  );
}
export default MainWindow;
