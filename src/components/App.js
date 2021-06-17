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
    showModal: false,
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

  //   handleLoadMore = () => {
  //     if (this.state.images.length > 0) {
  //       this.handleAddImgs();

  //       window.scrollTo({
  //         top: document.documentElement.scrollHeight,
  //         behavior: "smooth",
  //       });
  //     }
  //   };

  render() {
    const { images, showModal } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.handleChangeSearch} />
        {images.length > 0 && (
          <>
            <ImageGallery images={images} />
            <Button addImgs={this.handleAddImgs} />
          </>
        )}
        {showModal && <Modal image={images} />}
        {/* <GalleryLoader /> */}
      </>
    );
  }
}

export default App;
