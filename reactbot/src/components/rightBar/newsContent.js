import React from "react";
import "../rightBar/rightBar.css";

// import { useHttp } from "../../hooks/http.hook";

const NewsContent = (props) => {
  return (
    <div className="newsBlock">
      <div>
        <span>{props.news.header}</span>
      </div>

      <p>{props.news.text}</p>
    </div>
  );
};

export default NewsContent;
