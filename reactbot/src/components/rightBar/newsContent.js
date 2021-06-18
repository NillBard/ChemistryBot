import React from "react";
import "../rightBar/rightBar.css";
import { NavLink } from "react-router-dom";
import { useHttp } from "../../hooks/http.hook";

const NewsContent = (props) => {
  return (
    <div className="newsBlock">
      <div>
        <span>{props.news.header}</span>
      </div>
      <div>
        <span>{props.news.text}</span>
      </div>
    </div>
  );
};

export default NewsContent;
