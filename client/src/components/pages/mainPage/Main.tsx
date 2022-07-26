import Theme from "../../organisms/theme/Theme";
import React, { useMemo } from "react";
import NavBar from "../../organisms/navbar/NavBar";
import Title from "../../molecules/title/Title";
import backImage from "../../../images/study.jpg";
import styles from "./Main.module.css";
import ModalButton from "../../molecules/title/modalButton/ModalButton";
import NavModal from "../../organisms/navModal/NavModal";
import HomeIntro from "../../organisms/Main/HomeIntro";
import HomeWhoAmI from "../../organisms/Main/HomeWhoAmI";

export default function Main() {
  return (
    <>
      <NavBar />
      <Theme>
        <div className={styles.container}>
          <ModalButton />
          <Title />
          <div className={styles.topContainer}>
            <div className={styles.back}>
              <img src={backImage} className={styles.backimg} />
            </div>
          </div>
        </div>
        <NavModal />
        <HomeIntro />
        <HomeWhoAmI />
      </Theme>
    </>
  );
}
