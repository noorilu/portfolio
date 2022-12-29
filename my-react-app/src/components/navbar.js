import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className={styles.navContainer}>
        <Link to="/">
          <img
            src={require("../static/icons/main.PNG")}
            alt={"apple"}
            className={styles.navIcon}
          />
        </Link>
        <Link to="/projects">
          <img
            src={require("../static/icons/projects.PNG")}
            alt={"bunny"}
            className={styles.navIcon}
          />
        </Link>
        <Link to="/" className={styles.navLogo}>
          <div className={styles.navTop}>
            <span>L</span>
            <span>u</span>
            <span>c</span>
            <span>i</span>
            <span>a</span>
          </div>
          <div className={styles.navBottom}>
            <span>K</span>
            <span>i</span>
            <span>m</span>
          </div>
        </Link>
        <Link to="/artworks">
          <img
            src={require("../static/icons/art.PNG")}
            alt={"poo"}
            className={styles.navIcon}
          />
        </Link>
        <Link to="/contacts">
          <img
            src={require("../static/icons/contacts.PNG")}
            alt={"cactus"}
            className={styles.navIcon}
          />
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
