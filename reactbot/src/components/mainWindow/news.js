import React from "react";
import "../mainWindow/window.css";
import NewsBlock from "./newsBlock";
import { NavLink } from "react-router-dom";

const News = (props) => {
  let newsWindow = props.news.news.map((el) => (
    <NewsBlock news={el}></NewsBlock>
  ));
  return (
    <div className="NewsMain">
      <NavLink to="/adminNews"> Admin</NavLink>
      <div className="headNews">
        <h1>Новости</h1>
      </div>
      {newsWindow}
    </div>
  );
};

export default News;
