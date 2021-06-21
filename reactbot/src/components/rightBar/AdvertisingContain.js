import React from "react";
import { connect } from "react-redux";
import Advertising from "./Advertising";

let mapStateToProps = (state) => {
  return {
    news: state.contain.advertising.news,
  };
};
let mapDispatchToProps = () => {};

const AdvertisingContain = connect(
  mapStateToProps,
  mapDispatchToProps
)(Advertising);
export default AdvertisingContain;
