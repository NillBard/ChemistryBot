import React from "react";
import "../rightBar/rightBar.css";

// import { useHttp } from "../../hooks/http.hook";

const NewsContent = ({ news }) => {
  return (
    <div key={news.id} className="newsBlock">
      <div className="newsHeader">
        <span>{news.header}</span>
      </div>

      <p className="newsBody">{news.text}</p>
    </div>
  );
};

export default NewsContent;
