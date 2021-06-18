import React from "react";
import styles from "./ImageGalleryItem.module.css";

const ImageGalleryItem = ({ imageUrl, imageAlt, dataId, itemIdx }) => {
  return (
    <li className={styles.ImageGalleryItem}>
      <img
        src={imageUrl}
        alt={imageAlt}
        className={styles.ImageGalleryItem_image}
        data-id={dataId}
        data-idx={itemIdx}
      />
    </li>
  );
};

export default ImageGalleryItem;
