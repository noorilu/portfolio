import React from "react";
import { useState } from "react";
import styles from "./projects.module.css";
import { useNavigate } from "react-router-dom";

function Projects() {
  const Navigate = useNavigate();
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };
  const PageChange = (url) => {
    Navigate(url);
  };

  return (
    <div className={styles.projectsContainer}>
      <div className={styles.project}>
        <div
          className={styles.reference}
          onClick={() => openInNewTab("https://github.com/J-TALE/J-TALE")}
        >
          <img
            src={require("../static/projectIcons/project1.png")}
            alt={"jtale"}
            className={styles.photo}
          />
          {/* <div className={styles.hovertext}>project1</div> */}
        </div>
        <div className={styles.about}>
          <p className={styles.big}>Auto-Suggest for Chatbot Creators</p>
          <p className={styles.small}>
            Web that parses through existing chatbot transcripts to auto-suggest
            intents for chatbot creators.
          </p>
          <img
            src={require("../static/languages/mongo.png")}
            alt={"mongo"}
            className={styles.icons2}
          />
          <img
            src={require("../static/languages/Expressjs.png")}
            alt={"express"}
            className={styles.icons3}
          />
          <img
            src={require("../static/languages/node.png")}
            alt={"node"}
            className={styles.icons4}
          />
          <img
            src={require("../static/languages/react.png")}
            alt={"react"}
            className={styles.icons5}
          />
        </div>
      </div>
      <div className={styles.project}>
        <div
          className={styles.reference}
          onClick={() => openInNewTab("https://github.com/jltng/htn-2022")}
        >
          <img
            src={require("../static/projectIcons/project3.png")}
            alt={"sttb"}
            className={styles.photo}
          />
          {/* <div className={styles.hovertext}>project2</div> */}
        </div>
        <div className={styles.about}>
          <p className={styles.big}>Beats to the Step</p>
          <p className={styles.small}>
            Mobile app that allows you to find music with a desired BPM that
            matches your footsteps for everyday walk or run.
          </p>
          <img
            src={require("../static/languages/dart.png")}
            alt={"dart"}
            className={styles.icons1}
          />
          <img
            src={require("../static/languages/firebase.png")}
            alt={"firebase"}
            className={styles.icons2}
          />
        </div>
      </div>
      <div className={styles.project}>
        <div
          className={styles.reference}
          onClick={() =>
            openInNewTab("https://github.com/CS110-Project-Team/Project")
          }
        >
          <img
            src={require("../static/projectIcons/project2.png")}
            alt={"covid"}
            className={styles.photo}
          />
          {/* <div className={styles.hovertext}>project3</div> */}
        </div>
        <div className={styles.about}>
          <p className={styles.big}>
            COVID-19: How Canadians Cope with Rising Food Prices
          </p>
          <p className={styles.small}>
            Choropleth maps to investigate the impact of COVID-19 on the
            correlation between food price and its substitutes and complements.
          </p>
          <img
            src={require("../static/languages/python.png")}
            alt={"python"}
            className={styles.icons2}
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
