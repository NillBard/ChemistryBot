import React from "react";
import "../rightBar/rightBar.css";
import NewsBlock from "../rightBar/newsContent";

function Advertising(props) {
  return (
    <div className="rightBar">
      <div className="Advertising">
        <h1> Реклама </h1>
      </div>
      <div className="news">
        <h1> Новости </h1>
        <NewsBlock news={props.Advertising.news}></NewsBlock>
      </div>
    </div>
  );
}
export default Advertising;
