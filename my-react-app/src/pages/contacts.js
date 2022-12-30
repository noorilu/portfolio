import React from "react";
import { useState, useRef } from "react";
import styles from "./contacts.module.css";
// import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import Alert from "../components/Alert";
import Button from "../components/Button";

function Contacts() {
  const [confirm, setConfirm] = useState(false);
  // const Navigate = useNavigate();
  // const PageChange = (url) => {
  //   Navigate(url);
  // };

  const form = useRef();
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

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
          setConfirm(true);
          setTimeout(() => {
            setConfirm(false);
          }, 2000);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className={styles.mainContainer}>
      <Alert show={confirm} success={true} message="Email sent successfully!" />
      <div className={styles.profileContainer}>
        <div className={styles.container1}>
          <p className={styles.big}>
            Get in<br></br>Touch!
          </p>
          <img
            src={require("../static/icons/email.png")}
            className={styles.icons}
            alt="email"
            onClick={() => openInNewTab("mailto:lucia.kim0816@gmail.com")}
          ></img>
          <img
            src={require("../static/icons/linkedin.png")}
            className={styles.icons}
            alt="linkedin"
            onClick={() =>
              openInNewTab("https://www.linkedin.com/in/luci-kim/")
            }
          ></img>
          <img
            src={require("../static/icons/github.png")}
            className={styles.icons}
            alt="github"
            onClick={() => openInNewTab("https://github.com/noorilu")}
          ></img>
        </div>
        <div className={styles.container2}>
          <p className={styles.label}>Send me a message</p>
          <form ref={form} onSubmit={sendEmail}>
            <input
              className={styles.input}
              placeholder="Name"
              required
              name="user_name"
            />
            <input
              className={styles.input}
              placeholder="Email"
              required
              pattern="^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"
              name="user_email"
            />
            <textarea
              className={styles.textarea}
              placeholder="Message"
              required
              name="message"
            />
            <div className={styles.container5}>
              {/* <button className={styles.submitBtn} type="submit">
                Send
              </button> */}
              <Button
                buttonType="submit"
                type="submit"
                text="Send"
                image={require("../static/icons/main.PNG")}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
