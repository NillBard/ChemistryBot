import React from "react";
import "../mainWindow/window.css";
import logo from "./heisenberg.svg";

const styles = {
  test: {},
};

export default function RegistrPage() {
  return (
    <div className="reg">
      <h1 className="h1">Пожалуйста авторизуйтесь</h1>
      <div className="regContent">
        <div>
          <img className="regLogo" src={logo} />
        </div>
        <div>
          <div className="login button">
            <span>Регистрация</span>
          </div>
          <div className="button register">
            <span>Войти</span>
          </div>
        </div>
      </div>
    </div>
  );
}
