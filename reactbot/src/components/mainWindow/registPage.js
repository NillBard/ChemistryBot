import React, { useContext, useEffect, useState } from "react";
import "../mainWindow/window.css";
import logo from "./heisenberg.svg";
import { useHttp } from "../../hooks/http.hook";
import { AuthContext } from "../../redux/authContext";
import { useMessage } from "../../hooks/message.hook";

export default function RegistrPage() {
  const message = useMessage();
  const auth = useContext(AuthContext);
  const { loading, request, error, clearError } = useHttp();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    message(error);
    clearError();
  }, [error, message, clearError]);

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };
  const registrHandler = async () => {
    try {
      const data = await request(
        "http://localhost:5000/api/auth/register",
        "POST",
        {
          ...form,
        }
      );
      console.log(data);
    } catch (e) {}
  };

  const loginHandler = async () => {
    try {
      const data = await request(
        "http://localhost:5000/api/auth/login",
        "POST",
        {
          ...form,
        }
      );
      auth.login(data.token, data.userId);
    } catch (e) {}
  };
  return (
    <div className="reg">
      <h1 className="h1">Пожалуйста авторизуйтесь</h1>
      <div className="regContent">
        <div>
          <img className="regLogo" src={logo} />
        </div>
        <div className="input-field">
          <input
            placeholder="Введите email"
            id="email"
            type="text"
            name="email"
            onChange={changeHandler}
          />
        </div>
        <div className="input-field">
          <input
            placeholder="Введите пароль"
            id="password"
            type="password"
            name="password"
            onChange={changeHandler}
          />
        </div>
        <div>
          <button
            onClick={loginHandler}
            disabled={loading}
            className="button register"
          >
            <span>Войти</span>
          </button>
          <button
            disabled={loading}
            onClick={registrHandler}
            className="login button"
          >
            <span>Регистрация</span>
          </button>
        </div>
      </div>
    </div>
  );
}
