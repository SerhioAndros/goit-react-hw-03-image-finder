import React from "react";
import styles from "./Button.module.css";

const Button = ({ addImgs }) => {
  return (
    <button type="button" className={styles.Button} onClick={addImgs}>
      Load more
    </button>
  );
};

export default Button;
