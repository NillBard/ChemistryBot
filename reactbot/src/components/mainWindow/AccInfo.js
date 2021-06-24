import React, { useContext } from "react";
import "./window.css";
import avatar from "./heisenberg.svg";
import { AuthContext } from "../../redux/authContext";
import { useHistory } from "react-router-dom";

const styles = {
  header: { marginLeft: "30px" },
  span: { display: "flex" },
  butt: {
    marginTop: "0px",
    width: "200px",
    height: "40px",
    // display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
  },
  tdi: { backgroundColor: "#4f688c", color: "red" },
  alert: {
    backgroundColor: "red",
    marginTop: "0px",
    width: "200px",
    height: "40px",
  },
  a: {
    textDecoration: "none",
  },
};

export default function AccInfo() {
  const history = useHistory();
  const auth = useContext(AuthContext);
  const logOutHandler = (event) => {
    event.preventDefault();
    auth.logout();
    history.push("/");
  };

  return (
    <div className="leftBlocks">
      <div className="outlinesHeader">
        <h1 className="h1" style={styles.header}>
          Account
        </h1>
      </div>
      <div className="accInfoMain">
        <div className="accInfoInfo">
          <div className="accInfoAvatar">
            <img src={avatar} />
          </div>
          <div className="accInfoStat">
            <span>{"Рейтинг: 0"}</span>
            <span>{"Премиум: отключен"}</span>
          </div>
        </div>
        <div className="accInfoInfo">
          <div>
            <table>
              <tr>
                <td>
                  <span>Email</span>
                </td>
                <td>
                  <input />
                </td>
              </tr>
              <tr style={styles.tdi}>
                <td colspan={"2"} style={styles.tdi}>
                  <div className="button login" style={styles.butt}>
                    <span>Обновить</span>
                  </div>
                </td>
              </tr>

              <tr>
                <td>
                  <span>Пароль</span>
                </td>
                <td>
                  <input />
                </td>
              </tr>
              <tr style={styles.tdi}>
                <td colspan={"2"} style={styles.tdi}>
                  <div className="button login" style={styles.butt}>
                    <span>Обновить</span>
                  </div>
                </td>
              </tr>
            </table>
          </div>
        </div>
        <div className="accInfoInfo">
          <div className="button login" style={styles.alert}>
            <a href={"/"} style={styles.a} onClick={logOutHandler}>
              <span>Выйти</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
