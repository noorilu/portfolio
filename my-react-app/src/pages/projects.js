import React from "react";
import { useState } from "react";
import styles from "./projects.module.css";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

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
          // className={styles.reference}
          class="group flex max-h-60 overflow-hidden shadow-lg rounded-xl ease-in-out hover:scale-110 transition duration-500
          w-1/2"
          onClick={() => openInNewTab("https://github.com/J-TALE/J-TALE")}
        >
          <img
            src={require("../static/projectIcons/project1.png")}
            alt={"jtale"}
            // className={styles.photo}
            class="rounded-xl object-cover object-top group-hover:brightness-75 ease-in-out duration-500 inline-block"
          />
          <div
            // className={styles.hovertext}
            class="absolute text-center font-upheaval text-white text-3xl opacity-0 group-hover:opacity-100 ease-in-out duration-500 w-full place-self-center tracking-wider"
          >
            See on Github
          </div>
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
          // className={styles.reference}
          class="group flex max-h-60 overflow-hidden shadow-lg rounded-xl ease-in-out hover:scale-110 transition duration-500
          w-1/2"
          onClick={() =>
            openInNewTab("https://github.com/CS110-Project-Team/Project")
          }
        >
          <img
            src={require("../static/projectIcons/project2.png")}
            alt={"covid"}
            // className={styles.photo}
            class="rounded-xl object-cover object-top group-hover:brightness-75 ease-in-out duration-500 inline-block"
          />
          <div
            // className={styles.hovertext}
            class="absolute text-center font-upheaval text-white text-3xl opacity-0 group-hover:opacity-100 ease-in-out duration-500 w-full place-self-center tracking-wider"
          >
            See on Github
          </div>
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

      <div className={styles.project}>
        <div
          // className={styles.reference}
          class="group flex max-h-60 overflow-hidden shadow-lg rounded-xl ease-in-out hover:scale-110 transition duration-500
          w-1/2"
          onClick={() => openInNewTab("https://github.com/jltng/htn-2022")}
        >
          <img
            src={require("../static/projectIcons/project3.png")}
            alt={"sttb"}
            // className={styles.photo}
            class="rounded-xl object-cover object-top group-hover:brightness-75 ease-in-out duration-500 inline-block"
          />
          <div
            // className={styles.hovertext}
            class="absolute text-center font-upheaval text-white text-3xl opacity-0 group-hover:opacity-100 ease-in-out duration-500 w-full place-self-center tracking-wider"
          >
            See on Github
          </div>
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
      <div className={styles.coursework}>
        <p className={styles.big2}>Relevant Coursework and Grades</p>
        <p className={styles.small2}>
          <b>CSC258</b> Computer Organization (93)<br></br>
          <b>CSC236</b> Intro to Theory of Computation (90)<br></br>
          <b>STA130</b> Intro to Statistical Reasoning and Data Science (86)
        </p>
        <p className={styles.small2}>
          <b>CSC207</b> Software Design (91) <br></br>
          <b>CSC111</b> Foundations of Computer Science (89)
        </p>
      </div>
      <div className={styles.buttons}>
        <Button
          buttonType="green"
          onClick={() => {
            PageChange("/main");
            window.scrollTo({ top: 0, left: 0, behavior: "auto" });
          }}
          image={require("../static/icons/main.PNG")}
          text="Main"
        />
        <Button
          buttonType="green"
          onClick={() => {
            PageChange("/artworks");
            window.scrollTo({ top: 0, left: 0, behavior: "auto" });
          }}
          image={require("../static/icons/art.PNG")}
          text="Artworks"
        />
        <Button
          buttonType="green"
          onClick={() => {
            PageChange("/contacts");
            window.scrollTo({ top: 0, left: 0, behavior: "auto" });
          }}
          image={require("../static/icons/contacts.PNG")}
          text="Contacts"
        />
      </div>
    </div>
  );
}

export default Projects;
