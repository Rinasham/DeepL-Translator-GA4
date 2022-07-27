import Theme from "../../organisms/theme/Theme";
import { useState } from "react";
import Header from "../../organisms/header/Header";
import Title from "../../molecules/title/Title";
import backImage from "../../../images/study.jpg";
import styles from "./Main.module.css";
import ModalButton from "../../molecules/modalButton/ModalButton";
import NavModal from "../../organisms/navModal/NavModal";
import HomeIntro from "../../organisms/main/HomeIntro";
import HomeWhoAmI from "../../organisms/main/HomeWhoAmI";
import PageTop from "../../molecules/pageTop/PageTop";
import Footer from "../../organisms/footer/Footer";

export default function Main() {
  const [isModalOn, setModalOn] = useState<boolean>(false);

  return (
    <>
      <Header />
      <Theme>
        <div className={styles.container}>
          <ModalButton isModalOn={isModalOn} setModalOn={setModalOn} />
          {isModalOn || <Title />}

          <div className={styles.topContainer}>
            <div className={styles.back}>
              <img src={backImage} className={styles.backimg} />
            </div>
          </div>
        </div>
        {isModalOn && <NavModal />}
        <HomeIntro />
        <HomeWhoAmI />
        {isModalOn || <PageTop />}
      </Theme>
      <Footer />
    </>
  );
}
