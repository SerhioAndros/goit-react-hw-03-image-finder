import React from "react";
import styles from "./ImageGalleryItem.module.css";
import PropTypes from "prop-types";

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

ImageGalleryItem.propTypes = {
  dataId: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  itemIdx: PropTypes.number.isRequired,
};

export default ImageGalleryItem;
