import newsReducer from "./news_reducer";

const ADD_NEWS = "ADD-NEWS";
const UPDATE_NEWS = "UPDATE-NEWS";

let store = {
  _state: {
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
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._rerenderTree = observer;
  },
  _rerenderTree() {
    console.log("state update");
  },
  addNews() {
    let newNews = {
      header: this._state.contain.advertising.newsChangeHead,
      text: this._state.contain.advertising.newsChangeText,
    };
    this._state.contain.advertising.news.unshift(newNews);
    store.updateNews("", "");
    this._rerenderTree(this._state);
  },
  updateNews(newHeaderNews, newTextNews) {
    this._state.contain.advertising.newsChangeHead = newHeaderNews;
    this._state.contain.advertising.newsChangeText = newTextNews;
    this._rerenderTree(this._state);
  },

  dispatch(action) {
    this._state.contain.advertising = newsReducer(
      this._state.contain.advertising,
      action
    );
    switch (action.type) {
      case ADD_NEWS:
        {
          let newNews = {
            header: this._state.contain.advertising.newsChangeHead,
            text: this._state.contain.advertising.newsChangeText,
          };
          this._state.contain.advertising.news.unshift(newNews);
          store.updateNews("", "");
          this._rerenderTree(this._state);
        }
        break;
      case UPDATE_NEWS:
        {
          this._state.contain.advertising.newsChangeHead = action.newHeaderNews;
          this._state.contain.advertising.newsChangeText = action.newTextNews;
        }
        break;
      default:
        break;
    }
  },
};

export const addNewsCreator = () => ({ type: ADD_NEWS });

export const updateNewsChange = (newsHeader, newsText) => ({
  type: UPDATE_NEWS,
  newsHeader: newsHeader,
  newsText: newsText,
});

window.store = store;
export default store;
