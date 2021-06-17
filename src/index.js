import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import styles from "./styles.css";
import "./styles.css";

ReactDOM.render(
  <React.StrictMode>
    <App className={styles.App} />
  </React.StrictMode>,
  document.getElementById("root")
);
