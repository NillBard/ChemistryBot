import React from "react";
import Account from "../menu/acc.svg";
import "../mainWindow/window.css";

const styles = {
  text: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#4f688c",
    marginTop: "10px",
  },
  img: { width: "40px", height: "40px" },
  block: {
    // backgroundColor: "red",
    // width: "40px",
    // height: "40px",
    margin: "5px",
    flexBasis: "40%",
    color: "var(--primary-color)",
  },
  blockSecond: {
    // width: "40px",
    // height: "40px",
    margin: "5px",
    flexBasis: "10%",
    color: "var(--primary-color)",
  },
};

const PersonRate = (props) => {
  return (
    <div style={styles.text}>
      <div style={styles.blockSecond}>
        <span>1</span>
      </div>
      <div style={styles.blockSecond}>
        <img src={props.avatar} style={styles.img} />
      </div>
      <div style={styles.block}>
        <span>{props.name}</span>
      </div>
      <div style={styles.block}>
        <span>10420</span>
      </div>
    </div>
  );
};

export default PersonRate;
