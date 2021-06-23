import React from "react";
import "../admin/admin.css";
import NewsBlock from "../mainWindow/newsBlock";

const AdminNews = (props) => {
  let newsWindow = props.advertising.news.map((el) => (
    <NewsBlock key={el.id} news={el}></NewsBlock>
  ));
  let header = React.createRef();
  let text = React.createRef();

  const addNews = () => {
    props.addNews();
  };

  const postChange = () => {
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
            ref={header}
            value={props.advertising.newsChangeHead}
          ></input>
        </div>

        <textarea
          className="addText"
          placeholder="Введите текст"
          onChange={postChange}
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
