import { rerenderTree } from "./rerenderTree";

let state = {
  contain: {
    advertising: {
      news: [
        {
          header: "bad news for gay",
          text: "your ass in shit",
        },
        {
          header: "bad news for gay",
          text: "your ass in shit",
        },
        {
          header: "bad news for gay",
          text: "your ass in shit",
        },
      ],
      newsChangeHead: "Введите название новости",
      newsChangeText: "Введите текст новости",
    },
  },
};

export let addNews = () => {
  let newNews = {
    header: state.contain.advertising.newsChangeHead,
    text: state.contain.advertising.newsChangeText,
  };
  state.contain.advertising.news.unshift(newNews);
  updateNews("", "");
  rerenderTree(state);
};

export let updateNews = (newHeaderNews, newTextNews) => {
  state.contain.advertising.newsChangeHead = newHeaderNews;
  state.contain.advertising.newsChangeText = newTextNews;
  rerenderTree(state);
};

export default state;
