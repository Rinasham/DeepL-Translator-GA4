import styles from "./Home.module.css";
import DoubleArrowSharpIcon from "@mui/icons-material/DoubleArrowSharp";
import deepl from "../../../images/deepl.png";
import ContentTitle from "../../molecules/main/contentTitle/ContentTitle";

export default function HomeIntro() {
  return (
    <>
      <ContentTitle contentName="ABOUT DEEPL" />
      <section className={styles.section}>
        <div className={styles.flexCol}>
          <div className={styles.flex}>
            <h3 className={styles.title}>What is DEEPL?</h3>
            <div className={styles.arrowIcon}>
              <DoubleArrowSharpIcon style={{ fontSize: "40px" }} />
            </div>
          </div>
          <div className={styles.explanationContainer}>
            <p>The world's most accurate and nuanced machine translation</p>
            <p>
              Our innovative and award-winning breakthroughs continue to set
              industry standards, taking us closer to our vision: creating a
              world without language barriers.
            </p>
            <p>
              More than 1 billion choose DeepL for our exceptional translation
              quality, powered by our groundbreaking artificial intelligence
              technology.
            </p>
            <a
              target="_blank"
              href="https://www.deepl.com/en/whydeepl"
              className={styles.a}
            >
              WHAT IS DEEPL?
            </a>
          </div>
        </div>
        <div className={`${styles.flexCol} ${styles.flexImgBox}`}>
          <img src={deepl} style={{ width: "80%", margin: "auto" }} />
        </div>
      </section>
    </>
  );
}
