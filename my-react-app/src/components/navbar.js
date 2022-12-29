import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className={styles.navContainer}>
        <Link to="/main">
          <img
            src={require("../static/icons/main.PNG")}
            onMouseOver={(e) =>
              (e.currentTarget.src = require("../static/icons/apple.PNG"))
            }
            onMouseOut={(e) =>
              (e.currentTarget.src = require("../static/icons/main.PNG"))
            }
            alt={"main"}
            className={styles.navIcon}
          />
        </Link>
        <Link to="/projects">
          <img
            src={require("../static/icons/projects.PNG")}
            onMouseOver={(e) =>
              (e.currentTarget.src = require("../static/icons/bunny.PNG"))
            }
            onMouseOut={(e) =>
              (e.currentTarget.src = require("../static/icons/projects.PNG"))
            }
            alt={"projects"}
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
            onMouseOver={(e) =>
              (e.currentTarget.src = require("../static/icons/poo.PNG"))
            }
            onMouseOut={(e) =>
              (e.currentTarget.src = require("../static/icons/art.PNG"))
            }
            alt={"artworks"}
            className={styles.navIcon}
          />
        </Link>
        <Link to="/contacts">
          <img
            src={require("../static/icons/contacts.PNG")}
            onMouseOver={(e) =>
              (e.currentTarget.src = require("../static/icons/cactus.PNG"))
            }
            onMouseOut={(e) =>
              (e.currentTarget.src = require("../static/icons/contacts.PNG"))
            }
            alt={"contacts"}
            className={styles.navIcon}
          />
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
