import React from "react";
import styles from "./ImageGallery.module.css";
import ImageGalleryItem from "../imageGalleryItem/ImageGalleryItem";

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

export default ImageGallery;
