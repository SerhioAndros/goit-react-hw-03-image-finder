import React from "react";
import { Component } from "react";
import styles from "./Modal.module.css";

class Modal extends Component {
  state = { image: "" };
  componentDidMount() {
    this.setState({ image: this.props.image });
    window.addEventListener("keydown", (evt) => {
      if (evt.code === "Escape") {
        this.props.closeModal();
      }
    });
  }

  onClickClose = (evt) => {
    evt.preventDefault();
    if (evt.target === evt.currentTarget) {
      this.props.closeModal();
    }
  };
  render() {
    return (
      <div className={styles.Overlay} onClick={this.onClickClose}>
        <div className={styles.Modal}>
          <img
            src={this.state.image.largeImageURL}
            alt={this.state.image.tags}
          />
        </div>
      </div>
    );
  }
}

export default Modal;
