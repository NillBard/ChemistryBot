import React from "react";
import { Link } from "react-router-dom";
import "../mainWindow/window.css";

import TestRoutes from "./testTheme";

const styles = {
  header: { marginLeft: "30px" },
};

function tests() {
  let test = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0,
  ];
  let k = 0;

  return test.map((e) => {
    k++;
    return (
      <li className="testLinks">
        <Link className="testLinks" to={`test/${k}`} key={k}>
          {"Задание " + k}
        </Link>
      </li>
    );
  });
}

export default function Testing() {
  const routes = TestRoutes();
  return (
    <div className="leftBlocks">
      <div className="outlinesHeader">
        <h1 className="h1" style={styles.header}>
          Тесты
        </h1>
      </div>
      <div className="outlines">
        <ul className="ul">{tests()}</ul>
      </div>
    </div>
  );
}
