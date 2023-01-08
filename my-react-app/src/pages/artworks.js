import React from "react";
import { useState } from "react";
import styles from "./artworks.module.css";
import { useNavigate } from "react-router-dom";
import ImageModal from "../components/ImageModal.js";
import Button from "../components/Button";
import Howl from "../static/art/ghmc.PNG";
import Kiki from "../static/art/gkds.PNG";
import Totoro from "../static/art/gmnt.PNG";
import Ponyo from "../static/art/gp.PNG";
import Arrietty from "../static/art/gtswoa.PNG";
import Marnie from "../static/art/gwmwh.PNG";
import DST1 from "../static/art/dst1.png";
import DST2 from "../static/art/dst2.png";
import Stardew from "../static/art/sv1.jpg";
import Apricot from "../static/art/apricot.PNG";
import Butterfly from "../static/art/bs.jpg";
import Iforgor from "../static/art/iforgor.PNG";
import Loona1 from "../static/art/l1.PNG";
import Loona2 from "../static/art/l2.PNG";
import Minji from "../static/art/mj.PNG";
import NewJeans from "../static/art/nj.jpg";
import Tangle from "../static/art/tt.jpg";
import Athena from "../static/art/Untitled_Artwork.png";

function Artworks() {
  const [imageModal, setImageModal] = useState(false);
  const [imgsrc, setImgsrc] = useState("");
  const Navigate = useNavigate();
  const PageChange = (url) => {
    Navigate(url);
  };

  const handleImageClick = (img) => {
    if (img) {
      setImgsrc(img);
      setImageModal(true);
    } else {
      console.log("gg");
    }
  };

  return (
    <div
      onClick={() => {
        if (imageModal) {
          setImageModal(false);
        }
      }}
    >
      <div className={styles.mainContainer}>
        <div className={styles.profileContainer}>
          <img
            src={Howl}
            alt={"howl"}
            className={styles.profile}
            onClick={() => {
              handleImageClick(Howl);
            }}
          />
          <img
            src={Kiki}
            alt={"kiki"}
            className={styles.profile}
            onClick={() => {
              handleImageClick(Kiki);
            }}
          />
          <img
            src={Totoro}
            alt={"totoro"}
            className={styles.profile}
            onClick={() => {
              handleImageClick(Totoro);
            }}
          />
          <img
            src={Ponyo}
            alt={"ponyo"}
            className={styles.profile}
            onClick={() => {
              handleImageClick(Ponyo);
            }}
          />
          <img
            src={Arrietty}
            alt={"arrietty"}
            className={styles.profile}
            onClick={() => {
              handleImageClick(Arrietty);
            }}
          />
          <img
            src={Marnie}
            alt={"marnie"}
            className={styles.profile}
            onClick={() => {
              handleImageClick(Marnie);
            }}
          />
          <img
            src={DST1}
            alt={"dst1"}
            className={styles.profile}
            onClick={() => {
              handleImageClick(DST1);
            }}
          />
          <img
            src={DST2}
            alt={"dst2"}
            className={styles.profile}
            onClick={() => {
              handleImageClick(DST2);
            }}
          />
          <img
            src={Stardew}
            alt={"sv1"}
            className={styles.profile}
            onClick={() => {
              handleImageClick(Stardew);
            }}
          />
          <img
            src={Apricot}
            alt={"apricot"}
            className={styles.profile}
            onClick={() => {
              handleImageClick(Apricot);
            }}
          />
          <img
            src={Butterfly}
            alt={"butterflysoup"}
            className={styles.profile}
            onClick={() => {
              handleImageClick(Butterfly);
            }}
          />
          <img
            src={Iforgor}
            alt={"iforgor"}
            className={styles.profile}
            onClick={() => {
              handleImageClick(Iforgor);
            }}
          />
          <img
            src={Loona1}
            alt={"loona1"}
            className={styles.profile}
            onClick={() => {
              handleImageClick(Loona1);
            }}
          />
          <img
            src={Loona2}
            alt={"loona2"}
            className={styles.profile}
            onClick={() => {
              handleImageClick(Loona2);
            }}
          />
          <img
            src={Minji}
            alt={"minji"}
            className={styles.profile}
            onClick={() => {
              handleImageClick(Minji);
            }}
          />
          <img
            src={NewJeans}
            alt={"ditto"}
            className={styles.profile}
            onClick={() => {
              handleImageClick(NewJeans);
            }}
          />
          <img
            src={Tangle}
            alt={"tangletower"}
            className={styles.profile}
            onClick={() => {
              handleImageClick(Tangle);
            }}
          />
          <img
            src={Athena}
            alt={"athena"}
            className={styles.profile}
            onClick={() => {
              handleImageClick(Athena);
            }}
          />
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
              PageChange("/projects");
              window.scrollTo({ top: 0, left: 0, behavior: "auto" });
            }}
            image={require("../static/icons/projects.PNG")}
            text="Projects"
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
        <ImageModal show={imageModal} image={imgsrc} body="" />
      </div>
    </div>
  );
}

export default Artworks;
