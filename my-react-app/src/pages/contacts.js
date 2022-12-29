import React from "react";
import { useState, useRef } from "react";
import styles from "./contacts.module.css";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";

function Contacts() {
  const Navigate = useNavigate();
  const PageChange = (url) => {
    Navigate(url);
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_API
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.profileContainer}>
        <div className={styles.container1}>
          <p className={styles.big}>
            Get in<br></br>Touch!
          </p>
        </div>
        <div className={styles.container2}>
          <p className={styles.label}>Send me a message</p>
          <form ref={form}>
            <input className={styles.input} placeholder="Name" />
            <input className={styles.input} placeholder="Email" />
            <textarea className={styles.textarea} placeholder="Message" />
            <div className={styles.container5}>
              <button className={styles.submitBtn} onClick={sendEmail}>
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
      <p className={styles.small}>or... reach me here!</p>
      <div className={styles.container3}>
        <div className={styles.container4}>
          <img
            src={require("../static/icons/email.png")}
            className={styles.icons}
          ></img>
        </div>
        <div className={styles.container4}>
          <img
            src={require("../static/icons/linkedin.png")}
            className={styles.icons}
          ></img>
        </div>
        <div className={styles.container4}>
          <img
            src={require("../static/icons/github.png")}
            className={styles.icons}
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
