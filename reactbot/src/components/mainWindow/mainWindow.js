import React from "react";
import "../mainWindow/window.css";
import "../mainWindow/heisenberg.svg";
import { useRoutes } from "../routes";

function MainWindow() {
  const routes = useRoutes(1);
  return (
    <main id="promo" className="promo">
      {routes}
      {/* <Switch>
                <Route exact path ='/news' component = {News}></Route>
                <Route path ='/registPage' component = {RegistrPage}></Route>
                <Route path ='/rate' component = {Rate}></Route>
                <Route path ='/Outlines' component = {Outlines}></Route>
                <Route path ='/testing' component = {Tests}></Route>                
            </Switch> */}
    </main>
  );
}
export default MainWindow;
