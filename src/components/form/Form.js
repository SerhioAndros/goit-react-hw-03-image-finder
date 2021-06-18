import React, { Component } from "react";
import styles from "./Form.module.css";
import PropTypes from "prop-types";

class Form extends Component {
  state = {
    search: "",
  };

  handleInputChange = (evt) => {
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    const { search } = this.state;
    if (!search.trim()) return alert("Please, enter your request");

    this.props.onSubmit(search);
    this.setState({
      search: "",
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={styles.SearchForm}>
        <button type="submit" className={styles.SearchForm_button}>
          <span className={styles.SearchForm_button_label}>Search</span>
        </button>

        <input
          className={styles.SearchForm_input}
          type="text"
          name="search"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={this.state.search}
          onChange={this.handleInputChange}
        />
      </form>
    );
  }
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
