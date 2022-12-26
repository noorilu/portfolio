import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Speech.module.css";
import Button from "./Button.js";

/**
 * A generic input modal component
 * @module GenericSpeech
 */
/** @prop {boolean} [show] : whether the speech shows or not*/
/** @prop {String} [speaker] : who is talking*/
/** @prop {String} [body] : text*/
/** @prop {fuction} [onSubmit] : the function to be executed when CONTINUE button is pressed*/
/** @prop {String} [continue] : text on button*/

function Speech(props) {
  if (!props.show) {
    return null;
  }

  return (
    <div className={styles.speech}>
      <div className={styles.header}>
        <h4 className={styles.speaker}>{props.speaker}</h4>
      </div>
      <div className={styles.content}>
        <div className={styles.body}>{props.body}</div>
      </div>
      <div className={styles.footer}>
        <Button
          buttonType="speechContinue"
          onClick={props.onSubmit}
          text={props.continue}
        />
      </div>
    </div>
  );
}

export default Speech;
