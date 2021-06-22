import "../index.css";
import React from "react";
import Left from "./leftBar/Left";
import AdvertisingContain from "./rightBar/AdvertisingContain";
import { useRoutes } from "./routes";
import { useAuth } from "../hooks/auth.hook";
import { AuthContext } from "../redux/authContext";

export default function Contain() {
  const { token, login, logout, userId } = useAuth();
  const isAuthenticated = !!token;
  const routes = useRoutes(isAuthenticated);
  return (
    <AuthContext.Provider
      value={{ token, login, logout, userId, isAuthenticated }}
    >
      <div className="contain">
        <Left></Left>
        {routes}
        <AdvertisingContain></AdvertisingContain>
      </div>
    </AuthContext.Provider>
  );
}
