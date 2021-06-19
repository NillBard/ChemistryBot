import React from "react";
import "../admin/admin.css";
import NewsBlock from "../mainWindow/newsBlock";

const AdminNews = (props) => {
  let newsWindow = props.news.news.map((el) => (
    <NewsBlock news={el}></NewsBlock>
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
    <div className="NewsBlock">
      <div className="headNews">
        <h1>Новости</h1>
      </div>
      <div className="newsBlock">
        <div>
          <input
            className="addHeader"
            type="text"
            onChange={postChange}
            ref={header}
            value={props.news.newsChangeHead}
          ></input>
        </div>
        <div>
          <textarea
            className="addText"
            onChange={postChange}
            ref={text}
            value={props.news.newsChangeText}
          ></textarea>
        </div>
      </div>
      <button onClick={addNews}>add</button>
      {newsWindow}
    </div>
  );
};

export default AdminNews;
