import React from "react";
import { useState } from "react";
import styles from "./artworks.module.css";
import { useNavigate } from "react-router-dom";

function Artworks() {
  const Navigate = useNavigate();
  const PageChange = (url) => {
    Navigate(url);
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.profileContainer}>
        <img
          src={require("../static/art/ghmc.PNG")}
          alt={"howl"}
          className={styles.profile}
        />
        <img
          src={require("../static/art/gkds.PNG")}
          alt={"kiki"}
          className={styles.profile}
        />
        <img
          src={require("../static/art/gmnt.PNG")}
          alt={"totoro"}
          className={styles.profile}
        />
        <img
          src={require("../static/art/gp.PNG")}
          alt={"ponyo"}
          className={styles.profile}
        />
        <img
          src={require("../static/art/gtswoa.PNG")}
          alt={"arietty"}
          className={styles.profile}
        />
        <img
          src={require("../static/art/gwmwh.PNG")}
          alt={"marnie"}
          className={styles.profile}
        />
        <img
          src={require("../static/art/dst1.png")}
          alt={"dst1"}
          className={styles.profile}
        />
        <img
          src={require("../static/art/dst2.png")}
          alt={"dst2"}
          className={styles.profile}
        />
        <img
          src={require("../static/art/sv1.jpg")}
          alt={"sv1"}
          className={styles.profile}
        />
      </div>
    </div>
  );
}

export default Artworks;
