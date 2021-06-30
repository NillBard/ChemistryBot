import React, { useCallback, useEffect, useState } from "react";
import "../mainWindow/window.css";
import NewsBlock from "./newsBlock";
import { NavLink } from "react-router-dom";
import { useHttp } from "../../hooks/http.hook";

const News = (props) => {
  const [news, setNews] = useState([]);
  const { request, loading } = useHttp();

  const fetchNews = useCallback(async () => {
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
    fetchNews();
  }, [fetchNews]);

  let newsWindow = news.map((el) => <NewsBlock news={el}></NewsBlock>);
  newsWindow.reverse();

  //let newsWindow = props.news.map((el) => <NewsBlock news={el}></NewsBlock>);
  return (
    <div className="NewsMain">
      <NavLink to="/adminNewsContaner"> Admin</NavLink>
      <div className="headNews">
        <h1>Новости</h1>
      </div>
      {newsWindow}
    </div>
  );
};

export default News;
