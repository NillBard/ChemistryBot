import React, { useState } from "react";
import { useHttp } from "../../hooks/http.hook";
import "../admin/admin.css";
import NewsBlock from "../mainWindow/newsBlock";

const AdminNews = (props) => {
  const { loading, request, error, clearError } = useHttp();
  const [news, setNews] = useState({
    header: "",
    text: "",
  });

  let newsWindow = props.advertising.news.map((el) => (
    <NewsBlock key={el.id} news={el}></NewsBlock>
  ));
  let header = React.createRef();
  let text = React.createRef();

  const addNews = async () => {
    try {
      const data = await request("http://localhost:5000/api/news/add", "POST", {
        ...news,
      });
      console.log(data);
      props.addNews();
    } catch (error) {}
  };

  const postChange = (event) => {
    setNews({ ...news, [event.target.name]: event.target.value });
    let newsHeader = header.current.value;
    let newsText = text.current.value;
    props.updateNews(newsHeader, newsText);
  };

  return (
    <div className="adminNews">
      <div className="headNews">
        <h1>Новости</h1>
      </div>
      <div className="addNewsBlock">
        <div>
          <input
            className="addHeader"
            placeholder="Введите название"
            type="text"
            onChange={postChange}
            name="header"
            ref={header}
            value={props.advertising.newsChangeHead}
          ></input>
        </div>

        <textarea
          className="addText"
          placeholder="Введите текст"
          onChange={postChange}
          name="text"
          ref={text}
          value={props.advertising.newsChangeText}
        ></textarea>
        <div className="button">
          <button>delete</button>
          <button onClick={addNews}>add</button>
        </div>
      </div>

      {newsWindow}
    </div>
  );
};

export default AdminNews;
