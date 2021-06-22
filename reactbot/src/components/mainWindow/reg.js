import React from "react";
import { Redirect } from "react-router-dom";

const styles = {
  flex: {
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    margin: "10px",
    flexDirection: "column",
  },
};

export default function Reg() {
  return (
    <div style={styles.flex}>
      <span className="h1" style={styles.flex}>
        Email
      </span>
      <input style={styles.flex} />
      <span className="h1" style={styles.flex}>
        Пароль
      </span>
      <input style={styles.flex} />
      <div className="button login">OK</div>
    </div>
  );
}
