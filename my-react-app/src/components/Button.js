import React from "react";
import styles from "./Button.module.css";

/**
 * A generic button component
 * @module GenericButton
 
 @prop {String} [buttonType] : predefined style of buttons
 @prop {function} [onClick] : the function to be executed on click
 @prop {String} [text] : Text to be displayed on the button
**/

function Button(props) {
  return (
    <button
      className={props.buttonType}
      style={props.className}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
}

export default Button;
