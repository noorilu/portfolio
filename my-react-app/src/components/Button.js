import React from "react";
import "./Button.css";

/**
 * A generic button component
 * @module GenericButton
 
 @prop {String} [buttonType] : predefined style of buttons
 @prop {function} [onClick] : the function to be executed on click
 @prop {String} [text] : Text to be displayed on the button
 @prop {String} [image] : image to be displayed on the button
**/

function Button(props) {
  return (
    <button
      className={props.buttonType}
      style={props.className}
      onClick={props.onClick}
    >
      <img src={props.image} class="inline-flex w-8 mr-2" alt="icon" />
      {props.text}
    </button>
  );
}

export default Button;
