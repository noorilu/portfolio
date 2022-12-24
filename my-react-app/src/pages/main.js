import React from "react";
import styles from "./main.module.css";
import { useNavigate } from "react-router-dom";

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
          Hello,<br></br>I'm Lucia!
          <br></br>Interact with my room to learn more about me!<br></br>
          testingtesting
        </div>
      </div>
      <div className={styles.roomContainer}>
        <img
          src={require("../static/room.PNG")}
          alt={"room"}
          className={styles.room}
        />
      </div>
    </div>
  );
}

export default Main;
