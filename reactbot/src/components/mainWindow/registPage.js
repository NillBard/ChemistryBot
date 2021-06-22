import React from "react";
import "../mainWindow/window.css";
import logo from "./heisenberg.svg";
import ReactDOM from "react-dom";
import Reg from "./reg";

const styles = {
  test: {},
};

export default function RegistrPage() {
  function reg() {
    ReactDOM.render(<Reg />, document.getElementById("promo"));
  }
  function log() {
    ReactDOM.render(<Reg />, document.getElementById("promo"));
  }
  return (
    <div className="reg">
      <h1 className="h1">Пожалуйста авторизуйтесь</h1>
      <div className="regContent">
        <div>
          <img className="regLogo" src={logo} />
        </div>
        <div>
          <div className="login button" onClick={reg}>
            <span>Регистрация</span>
          </div>
          <div className="button register" onClick={log}>
            <span>Войти</span>
          </div>
        </div>
      </div>
    </div>
  );
}
