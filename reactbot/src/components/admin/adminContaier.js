import React from "react";
import { addNewsCreator, updateNewsCreator } from "../../redux/news_reducer";
import AdminNews from "./adminNews";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    news: state.contain.advertising,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    addNews: () => {
      dispatch(addNewsCreator());
    },
    updateNews: (newsHeader, newsText) => {
      dispatch(updateNewsCreator(newsHeader, newsText));
    },
  };
};

const AdminNewsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminNews);

export default AdminNewsContainer;
