import React, { useCallback, useEffect, useState } from "react";
import "../rightBar/rightBar.css";
import NewsBlock from "./newsContent";
import { NavLink } from "react-router-dom";
import { useHttp } from "../../hooks/http.hook";

function Advertising(props) {
  const [news, setNews] = useState([]);
  const { request } = useHttp();

  const fetchThis = useCallback(async () => {
    try {
      const fetched = await request(
        "http://localhost:5000/api/news",
        "GET",
        null
      );
      setNews(fetched);
    } catch (error) {}
  }, [request]);

  useEffect(() => {
    fetchThis();
  }, [fetchThis]);

  let newNews = news.slice().reverse();

  return (
    <div className="rightBar">
      <div className="news">
        <h1> Новости </h1>
        <NewsBlock news={props.news[0]}></NewsBlock>
        <NavLink to="/news">Смотреть больше</NavLink>
      </div>
      {/* <div className="Advertising">
        <h1> Реклама </h1>
      </div> */}
    </div>
  );
}
export default Advertising;
