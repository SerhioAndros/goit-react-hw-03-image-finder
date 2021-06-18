import React from "react";
import Form from "../form/Form";
import styles from "./Searchbar.module.css";
import PropTypes from "prop-types";

const Searchbar = ({ onSubmit }) => {
  return (
    <header className={styles.Searchbar}>
      <Form onSubmit={onSubmit} />
    </header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
