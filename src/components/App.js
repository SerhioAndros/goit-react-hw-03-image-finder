// const BASE_URL = 'https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=';
// const apiKey = '21715456-94146d2128778e129cf5897fe';

// const fetchImages = (request, page) =>
//   fetch(`${BASE_URL}${request}&page=${page}&per_page=12&key=${apiKey}`)

import React, { Component } from "react";
import axios from "axios";
import Searchbar from "./searchbar/Searchbar";
import ImageGallery from "./imageGallery/ImageGallery";
import Button from "./button/Button";

const BASE_URL =
  "https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=";
const apiKey = "21715456-94146d2128778e129cf5897fe";

class App extends Component {
  state = {
    images: [],
    showModal: false,
    page: 1,
  };
  componentDidMount() {
    axios
      .get(
        "https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=london&page=1&per_page=12&key=21715456-94146d2128778e129cf5897fe"
      )
      .then((resp) => this.setState({ images: resp.data.hits }));
  }
  componentDidUpdate() {}

  handleAddImgs = (searchRequest) => {
    const { page } = this.state;
    axios
      .get(`${BASE_URL}${searchRequest}&page=${page}&per_page=12&key=${apiKey}`)
      .then((resp) => this.setState({ images: resp.data.hits }));
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleAddImgs} />
        <ImageGallery images={this.state.images} />
        <Button />
      </>
    );
  }
}

export default App;
