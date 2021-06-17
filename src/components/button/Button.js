import React from "react";
import styles from "./Button.module.css";

// window.scrollTo({
//   top: document.documentElement.scrollHeight,
//   behavior: "smooth",
// });

const Button = () => {
  return (
    <button type="button" className={styles.Button}>
      Load more
    </button>
  );
};

export default Button;
