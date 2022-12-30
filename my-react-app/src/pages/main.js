import React from "react";
import { useState } from "react";
import styles from "./main.module.css";
import { useNavigate } from "react-router-dom";
import Speech from "../components/Speech";
import AnimatedTyping from "../components/AnimatedTyping";
import Button from "../components/Button";

function Main() {
  const [speech1, setSpeech1] = useState(false);
  const [speech2, setSpeech2] = useState(false);
  const [speech3, setSpeech3] = useState(false);
  const Navigate = useNavigate();
  const PageChange = (url) => {
    Navigate(url);
  };

  return (
    <div
      onClick={() => {
        if (speech1) {
          setSpeech1(false);
        }
        if (speech2) {
          setSpeech2(false);
        }
        if (speech3) {
          setSpeech3(false);
        }
      }}
    >
      <div className={styles.mainContainer}>
        <div className={styles.profileContainer}>
          <img
            src={require("../static/profileNEW1.PNG")}
            alt={"profile"}
            className={styles.profile}
          />
          <div className={styles.introduction}>
            <p className={styles.big}>
              Hello!<br></br>I'm Lucia :)
            </p>
            <p className={styles.small}>
              <br></br>I am a second year student at the{" "}
              <span className={styles.highlightContainer}>
                <span className={styles.highlight}>University of</span>
              </span>{" "}
              <span className={styles.highlightContainer}>
                <span className={styles.highlight}>Toronto</span>
              </span>{" "}
              studying{" "}
              <span className={styles.highlightContainer}>
                <span className={styles.highlight}>
                  computer science and statistics.
                </span>
              </span>
              <br></br>
              <br></br>
              Interact with my room to learn more about me!
            </p>
            <Button
              buttonType="green"
              onClick={() => {
                PageChange("/projects");
                window.scrollTo({ top: 0, left: 0, behavior: "auto" });
              }}
              disabled={false}
              image={require("../static/icons/projects.PNG")}
              text="Projects"
            />
            <Button
              buttonType="green"
              onClick={() => {
                PageChange("/artworks");
                window.scrollTo({ top: 0, left: 0, behavior: "auto" });
              }}
              disabled={false}
              image={require("../static/icons/art.PNG")}
              text="Artworks"
            />
            <Button
              buttonType="green"
              onClick={() => {
                PageChange("/contacts");
                window.scrollTo({ top: 0, left: 0, behavior: "auto" });
              }}
              disabled={false}
              image={require("../static/icons/contacts.PNG")}
              text="Contacts"
            />
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
            onClick={setSpeech1}
          />
          <img
            src={require("../static/icons/speech.png")}
            alt={"speech"}
            className={styles.abtme2}
            onClick={setSpeech2}
          />
          <img
            src={require("../static/icons/speech.png")}
            alt={"speech"}
            className={styles.abtme3}
            onClick={setSpeech3}
          />
          <Speech
            show={speech1}
            speaker="Lucia"
            body={
              <AnimatedTyping
                text={[
                  "I am a programmer! With experience in Python, Java, React.js as well as machine languages like MIPS, I am continuing to expand my coding knowledge to share with the world!",
                ]}
              />
            }
            onSubmit={() => {
              PageChange("/projects");
              window.scrollTo({ top: 0, left: 0, behavior: "auto" });
            }}
            image={require("../static/icons/projects.PNG")}
            continue="See PROJECTS"
          />
          <Speech
            show={speech2}
            speaker="Lucia"
            body={
              <AnimatedTyping
                text={[
                  "I am an artist! Whether it be in visual arts or music, I've always had an interest in bringing my creative ideas to reality. You can get a sense of it from this page!",
                ]}
              />
            }
            onSubmit={() => {
              PageChange("/artworks");
              window.scrollTo({ top: 0, left: 0, behavior: "auto" });
            }}
            image={require("../static/icons/art.PNG")}
            continue="See ARTWORKS"
          />
          <Speech
            show={speech3}
            speaker="Lucia"
            body={
              <AnimatedTyping
                text={[
                  "I am a lifelong learner! As an ambitious individual who is always looking for ways to expand knowledge, I am seeking more opportunities to explore my interests in greater depth!",
                ]}
              />
            }
            onSubmit={() => {
              PageChange("/contacts");
              window.scrollTo({ top: 0, left: 0, behavior: "auto" });
            }}
            image={require("../static/icons/contacts.PNG")}
            continue="See CONTACTS"
          />
        </div>
      </div>
    </div>
  );
}

export default Main;
