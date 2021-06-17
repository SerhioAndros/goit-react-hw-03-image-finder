import React from "react";
import styles from "./ImageGalleryItem.module.css";

const ImageGalleryItem = ({ imageUrl, imageAlt }) => {
  return (
    <li className={styles.ImageGalleryItem}>
      <img
        src={imageUrl}
        alt={imageAlt}
        className={styles.ImageGalleryItem_image}
      />
    </li>
  );
};

export default ImageGalleryItem;
