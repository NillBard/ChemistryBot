import React from "react";
import "../rightBar/rightBar.css";
import { NavLink } from "react-router-dom";
import { useHttp } from "../../hooks/http.hook";

const NewsContent = ({ header, text, date }) => {
  return (
    <div className="newsBlock">
      <div>
        <span>{header}</span>
        <span>{date}</span>
      </div>
      <div>
        <span>{text}</span>
      </div>
    </div>
  );
};

export default NewsContent;
