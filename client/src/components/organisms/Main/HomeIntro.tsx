import React from "react";
import styles from "./Home.module.css";
import DoubleArrowSharpIcon from "@mui/icons-material/DoubleArrowSharp";

export default function HomeIntro() {
  return (
    <div className={styles.intro}>
      <div className={styles.flexCol}>
        <div className={styles.flex}>
          <h3>What is DEEPL?</h3>
          <DoubleArrowSharpIcon
            className={styles.title}
            style={{ fontSize: "40px" }}
          />
        </div>
        <p className={styles.explanation}>DeepL is blah blah blah blah</p>
      </div>
    </div>
  );
}
