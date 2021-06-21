const ADD_NEWS = "ADD-NEWS";
const UPDATE_NEWS = "UPDATE-NEWS";

export const addNewsCreator = () => ({ type: ADD_NEWS });

export const updateNewsCreator = (newsHeader, newsText) => ({
  type: UPDATE_NEWS,
  newsHeader: newsHeader,
  newsText: newsText,
});

let initialState = {
  advertising: {
    news: [
      {
        id: 3,
        header: "bad news for gay",
        text: "your ass in shit",
      },
      {
        id: 2,
        header: "bad news for gay",
        text: "your ass in shit",
      },
      {
        id: 1,
        header: "bad news for gay",
        text: "your ass in shit",
      },
    ],
    newsChangeHead: "Введите название новости",
    newsChangeText: "Введите текст новости",
  },
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEWS:
      {
        let newNews = {
          id: 4,
          header: state.advertising.newsChangeHead,
          text: state.advertising.newsChangeText,
        };
        state.advertising.news.unshift(newNews);
        state.advertising.newsChangeHead = "";
        state.advertising.newsChangeText = "";
      }
      return state;
    case UPDATE_NEWS:
      {
        state.advertising.newsChangeHead = action.newsHeader;
        state.advertising.newsChangeText = action.newsText;
      }
      return state;
    default:
      return state;
  }
};

export default newsReducer;
