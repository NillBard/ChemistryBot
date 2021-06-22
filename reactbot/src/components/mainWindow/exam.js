import React from "react";
import "../mainWindow/window.css";

const styles = {
  header: { marginLeft: "30px" },
};

export default function Exam() {
  return (
    <div className="leftBlocks">
      <div className="outlinesHeader">
        <h1 className="h1" style={styles.header}>
          Пробники
        </h1>
      </div>
    </div>
  );
}
