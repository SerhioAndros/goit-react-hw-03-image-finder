import React from "react";
import styles from "./Button.module.css";
import PropTypes from "prop-types";

const Button = ({ btnName, addImgs }) => {
  return (
    <button type="button" className={styles.Button} onClick={addImgs}>
      {btnName}
    </button>
  );
};

Button.defaultProps = {
  btnName: "Just button",
};

Button.propTypes = {
  addImgs: PropTypes.func.isRequired,
  btnName: PropTypes.string,
};

export default Button;
