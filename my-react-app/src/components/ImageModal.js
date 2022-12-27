import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./ImageModal.module.css";
import Button from "./Button.js";

/**
 * A generic input modal component
 * @module GenericImageModal
 */
/** @prop {boolean} [show] : whether the modal shows or not*/
/** @prop {String} [image] : src of the image*/
/** @prop {String} [body] : description*/
/** @prop {String} [continue] : text on button*/

function ImageModal(props) {
  if (!props.show) {
    return null;
  }

  return (
    <div className={styles.speech}>
      <div className={styles.content}>
        <div className={styles.body}>
          <img src={props.image} className={styles.image} />
        </div>
      </div>
      <div className={styles.description}>{props.body}</div>
    </div>
  );
}

export default ImageModal;
