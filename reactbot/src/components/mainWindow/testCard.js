import React from "react";
import question from "../../tests/test/task1_11.png";
import question1 from "../../tests/test/task1_12.png";
import ReactDOM from "react-dom";

const styles = {
  but: {
    width: "200px",
    height: "50px",
    margin: "0",
  },
  row: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: "20px",
  },
};

export default function TestCard(props) {
  const id = props.links;
  function click() {
    ReactDOM.render(
      <div>
        <img src={question1} />
        <div style={styles.row}>
          <span className="h1">Введите ответ:</span>
        </div>
        <div style={styles.row}>
          <input />
          <div className="button login" style={styles.but} onClick={click}>
            OK
          </div>
        </div>
      </div>,
      document.getElementById("promo")
    );
  }
  return (
    <div>
      <img src={question} />
      <div style={styles.row}>
        <span className="h1">Введите ответ:</span>
      </div>
      <div style={styles.row}>
        <input />
        <div className="button login" style={styles.but} onClick={click}>
          OK
        </div>
      </div>
    </div>
  );
}
