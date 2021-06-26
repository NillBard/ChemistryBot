import React from "react";
import Flask from "../menu/flask 1.svg";
import Account from "../menu/acc.svg";
import { NavLink } from "react-router-dom";
import "../menu/menu.css";

export default function Menu() {
  return (
    <div className="menu">
      <div className="account">
        {/* <div className="icon"> */}
        <NavLink to="/testing">
          <img src={Flask}></img>
          <span>ХИМБОТ</span>
        </NavLink>
      </div>
      <div className="account">
        <NavLink to="/account">
          <img src={Account}></img>
          <span>Аккаунт</span>
        </NavLink>
      </div>
    </div>
  );
}
