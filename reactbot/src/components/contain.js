import "../index.css";
import React from "react";
import Left from "./leftBar/Left";

import Advertising from "./rightBar/Advertising";
import { useRoutes } from "./routes";

export default function Contain(props) {
  const routes = useRoutes(1, props);
  return (
    <div className="contain">
      <Left></Left>
      {routes}
      <Advertising Advertising={props.contain.Advertising}></Advertising>
    </div>
  );
}
