import React from "react";
import styles from "./ImageGallery.module.css";
import ImageGalleryItem from "../imageGalleryItem/ImageGalleryItem";
import PropTypes from "prop-types";

const ImageGallery = ({ images, onClick }) => {
  return (
    <ul className={styles.ImageGallery} onClick={onClick}>
      {images.map((image, idx) => (
        <ImageGalleryItem
          key={image.id}
          itemIdx={idx}
          imageUrl={image.webformatURL}
          imageAlt={image.tags}
          dataId={image.id}
        />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  onClick: PropTypes.func.isRequired,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default ImageGallery;
