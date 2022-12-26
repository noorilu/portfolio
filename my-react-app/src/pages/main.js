import React from "react";
import styles from "./main.module.css";
import { useNavigate } from "react-router-dom";
import TypeWriterEffect from "react-typewriter-effect";

function Main() {
  const Navigate = useNavigate();
  const PageChange = (url) => {
    Navigate(url);
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.profileContainer}>
        <img
          src={require("../static/profile.PNG")}
          alt={"profile"}
          className={styles.profile}
        />
        <div className={styles.introduction}>
          {/* <TypeWriterEffect
            textStyle={{
              fontFamily: "Upheaval",
              color: "#3F3D56",
              fontWeight: 500,
              fontSize: "4em",
            }}
            startDelay={100}
            cursorColor="black"
            multiText={["Help mEE...", "DOESTHISWERKKK"]}
            typeSpeed={100}
            loop={true}
            hideCursorAfterText={true}
            scrollArea={styles.introduction}
          /> */}
          <p className={styles.big}>
            Hello!<br></br>I'm Lucia:)
          </p>
          <p className={styles.small}>
            <br></br>I am a second year student at the University of Toronto
            studying computer science and statistics. <br></br> <br></br>
            Interact with my room to learn more about me!
          </p>
        </div>
      </div>
      <div className={styles.roomContainer}>
        <img
          src={require("../static/room.PNG")}
          alt={"room"}
          className={styles.room}
        />
        <img
          src={require("../static/icons/speech.png")}
          alt={"speech"}
          className={styles.abtme1}
        />
        <img
          src={require("../static/icons/speech.png")}
          alt={"speech"}
          className={styles.abtme2}
        />
        <img
          src={require("../static/icons/speech.png")}
          alt={"speech"}
          className={styles.abtme3}
        />
      </div>
    </div>
  );
}

export default Main;
