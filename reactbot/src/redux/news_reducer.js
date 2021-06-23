const ADD_NEWS = "ADD-NEWS";
const UPDATE_NEWS = "UPDATE-NEWS";
const SET_NEWS = "SET-NEWS";

export const addNewsCreator = () => ({ type: ADD_NEWS });

export const updateNewsCreator = (newsHeader, newsText) => ({
  type: UPDATE_NEWS,
  newsHeader: newsHeader,
  newsText: newsText,
});
export const setNews = (news) => ({
  type: SET_NEWS,
  news: news,
});

let initialState = {
  advertising: {
    news: [
      {
        id: 3,
        header: "Chemistry is best",
        text: "i love it",
      },
      {
        id: 2,
        header: "Chemistry is best",
        text: "i love it",
      },
      {
        id: 1,
        header: "Chemistry is best",
        text: "i love it",
      },
    ],
    newsChangeHead: "",
    newsChangeText: "",
  },
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEWS: {
      let newNews = {
        id: 4,
        header: state.advertising.newsChangeHead,
        text: state.advertising.newsChangeText,
      };

      return {
        ...state,
        advertising: {
          ...state.advertising,
          news: [newNews, ...state.advertising.news],
          newsChangeHead: "",
          newsChangeText: "",
        },
      };
    }

    case UPDATE_NEWS: {
      return {
        ...state,
        advertising: {
          ...state.advertising,
          newsChangeHead: action.newsHeader,
          newsChangeText: action.newsText,
        },
      };
    }

    case SET_NEWS: {
      return {
        ...state,
        advertising: {
          ...state.advertising,
          news: [action.news, ...state.advertising.news],
        },
      };
    }

    default:
      return state;
  }
};

export default newsReducer;
