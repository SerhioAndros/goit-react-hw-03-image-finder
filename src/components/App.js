import React, { Component } from "react";
import Searchbar from "./searchbar/Searchbar";
import ImageGallery from "./imageGallery/ImageGallery";
import Button from "./button/Button";
import { fetchImages } from "./services/imgs-api";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Modal from "./modal/Modal";
// import { GalleryLoader } from "./loader/Loader";
class App extends Component {
  state = {
    images: [],
    modalImg: "",
    page: 1,
    search: "",
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevState.search !== this.state.search) {
      this.handleAddImgs();
    }
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  }

  handleChangeSearch = (searchRequest) => {
    this.setState({
      search: searchRequest,
      images: [],
      page: 1,
    });
  };

  handleAddImgs = () => {
    const { page, search } = this.state;

    const options = { page, search };

    fetchImages(options).then((data) =>
      this.setState((prevState) => ({
        images: [...prevState.images, ...data],
        page: prevState.page + 1,
      }))
    );
  };

  handleChosenImg = (evt) => {
    evt.preventDefault();
    const { images } = this.state;
    const currImg = images.find((img) => img.id === +evt.target.dataset.id);
    this.setState({ modalImg: currImg });
  };

  closeModal = () => {
    this.setState({ modalImg: "" });
  };

  render() {
    const { images, modalImg } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.handleChangeSearch} />
        {images.length > 0 && (
          <>
            <ImageGallery images={images} onClick={this.handleChosenImg} />
            <Button addImgs={this.handleAddImgs} />
          </>
        )}
        {modalImg && <Modal image={modalImg} closeModal={this.closeModal} />}
        {/* <GalleryLoader /> */}
      </>
    );
  }
}

export default App;
