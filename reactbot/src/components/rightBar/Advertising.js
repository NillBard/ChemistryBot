import React from "react";
import "../rightBar/rightBar.css";
import NewsBlock from "./newsContent";
import { NavLink } from "react-router-dom";

function Advertising(props) {
  return (
    <div className="rightBar">
      <div className="Advertising">
        <h1> Реклама </h1>
      </div>
      <div className="news">
        <h1> Новости </h1>
        <NewsBlock news={props.news[0]}></NewsBlock>
        <NavLink to="/news">Смотреть больше</NavLink>
      </div>
    </div>
  );
}
export default Advertising;
