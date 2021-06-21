import React from "react";
import News from "./news";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    news: state.contain.advertising.news,
  };
};
let mapDispatchToProps = () => {};

const NewsContain = connect(mapStateToProps, mapDispatchToProps)(News);
export default NewsContain;
