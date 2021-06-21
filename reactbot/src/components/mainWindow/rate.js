import React from "react";
import "../mainWindow/window.css";
import Champion from "../mainWindow/Champion";
import PersonRate from "../mainWindow/PersonRate";
import Ac from "../mainWindow/heisenberg.svg";

const styles = {
  header: { marginLeft: "30px" },
};

function Rate() {
  const Account = {
    name: "Андрей",
    avatar: Ac,
  };

  return (
    <div className="leftBlocks">
      <div className="outlinesHeader">
        <h1 className="h1" style={styles.header}>
          Рейтинг
        </h1>
      </div>
      <div className="champions">
        <div className="champions first">
          <Champion />
        </div>
        <div className="champions second">
          <Champion />
          <Champion />
        </div>
        <div>
          <PersonRate name={Account.name} avatar={Account.avatar} />
          <PersonRate name={Account.name} avatar={Account.avatar} />

          <PersonRate name={Account.name} avatar={Account.avatar} />
          <PersonRate name={Account.name} avatar={Account.avatar} />
          <PersonRate name={Account.name} avatar={Account.avatar} />
          <PersonRate name={Account.name} avatar={Account.avatar} />
          <PersonRate name={Account.name} avatar={Account.avatar} />
          <PersonRate name={Account.name} avatar={Account.avatar} />
        </div>
      </div>
    </div>
  );
}

export default Rate;
