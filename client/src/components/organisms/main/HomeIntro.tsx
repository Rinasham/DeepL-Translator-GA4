import React from "react";
import styles from "./Home.module.css";
import DoubleArrowSharpIcon from "@mui/icons-material/DoubleArrowSharp";
import deepl from "../../../images/deepl.png";

export default function HomeIntro() {
  return (
    <section className={styles.section}>
      <div className={styles.flexCol}>
        <div className={styles.flex}>
          <h3 className={styles.title}>What is DEEPL?</h3>
          <div className={styles.arrowIcon}>
            <DoubleArrowSharpIcon style={{ fontSize: "40px" }} />
          </div>
        </div>
        <p className={styles.explanation}>DeepL is blah blah blah blah</p>
      </div>
      <div className={styles.flexCol}>
        <img src={deepl} style={{ width: "80%", margin: "auto" }} />
      </div>
    </section>
  );
}
