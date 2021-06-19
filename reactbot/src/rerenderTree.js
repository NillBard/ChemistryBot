import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { addNews, updateNews } from "./state";

export let rerenderTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state} addNews={addNews} updateNews={updateNews} />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
  );
};
