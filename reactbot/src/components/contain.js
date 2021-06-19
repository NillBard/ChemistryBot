import "../index.css";
import React from "react";
import Left from "./leftBar/Left";

import Advertising from "./rightBar/Advertising";
import { useRoutes } from "./routes";

export default function Contain(props) {
  const routes = useRoutes(0, props);
  return (
    <div className="contain">
      <Left></Left>
      {routes}
      <Advertising advertising={props.contain.advertising}></Advertising>
    </div>
  );
}
