import "../index.css";
import React from "react";
import Left from "./leftBar/Left";
import AdvertisingContain from "./rightBar/AdvertisingContain";
import { useRoutes } from "./routes";

export default function Contain() {
  const routes = useRoutes(0);
  return (
    <div className="contain">
      <Left></Left>
      {routes}
      <AdvertisingContain></AdvertisingContain>
    </div>
  );
}
