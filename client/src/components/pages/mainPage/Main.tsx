import Theme from "../../organisms/theme/Theme";
import { useState } from "react";
import Title from "../../molecules/title/Title";
import backImage from "../../../images/study.jpg";
import styles from "./Main.module.css";
import ModalButton from "../../molecules/modalButton/ModalButton";
import NavModal from "../../organisms/navModal/NavModal";
import HomeIntro from "../../organisms/main/HomeIntro";
import HomeWhoAmI from "../../organisms/main/HomeWhoAmI";
import PageTop from "../../molecules/pageTop/PageTop";
import { Layout } from "../../organisms/layout/Layout";
import { useMediaQuery } from "react-responsive";
import { useRecoilState } from "recoil";
import { modeState } from "../../../store/modeState";

export default function Main() {
  const [isModalOn, setModalOn] = useState<boolean>(false);
  const isSM = useMediaQuery({ query: "(max-width: 600px)" });
  const isMobile = isSM ? "mobile" : "desktop";
  const [mode, setMode] = useRecoilState(modeState);

  return (
    <Layout>
      <Theme>
        <div className={styles.container}>
          <ModalButton isModalOn={isModalOn} setModalOn={setModalOn} />
          {isModalOn || <Title />}

          <div className={styles.topContainer}>
            <div className={styles.back}>
              <img
                src={backImage}
                className={styles.backimg}
                style={{ filter: mode.style ? "" : "brightness(0.5)" }}
              />
            </div>
          </div>
        </div>
        {isModalOn && <NavModal />}
        <div className={`${styles.descriptionContainer} styles.${isMobile}`}>
          <HomeIntro />
          <HomeWhoAmI />
        </div>
        {isModalOn || <PageTop />}
      </Theme>
    </Layout>
  );
}
