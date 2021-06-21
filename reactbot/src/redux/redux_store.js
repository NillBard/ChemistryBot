import { combineReducers, createStore } from "redux";
import newsReducer from "./news_reducer";

let reducers = combineReducers({
  contain: newsReducer,
});

let store = createStore(reducers);
export default store;
