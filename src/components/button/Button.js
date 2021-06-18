import React from "react";
import styles from "./Button.module.css";
import PropTypes from "prop-types";

const Button = ({ addImgs }) => {
  return (
    <button type="button" className={styles.Button} onClick={addImgs}>
      Load more
    </button>
  );
};

Button.propTypes = {
  addImgs: PropTypes.func.isRequired,
};

export default Button;
