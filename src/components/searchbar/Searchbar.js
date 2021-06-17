import React from "react";
import Form from "../form/Form";
import styles from "./Searchbar.module.css";

const Searchbar = ({ onSubmit }) => {
  return (
    <header className={styles.Searchbar}>
      <Form onSubmit={onSubmit} />
    </header>
  );
};

export default Searchbar;
