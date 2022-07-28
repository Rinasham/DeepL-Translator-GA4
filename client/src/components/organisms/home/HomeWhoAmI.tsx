import React from "react";
import styles from "./Home.module.css";
import DoubleArrowSharpIcon from "@mui/icons-material/DoubleArrowSharp";
import profileImg from "../../../images/piano.jpg";

export default function HomeWhoAmI() {
  return (
    <section className={styles.section}>
      <div className={styles.flexCol}>
        <div className={styles.profileImg}>
          <img src={profileImg} style={{ width: "90%" }} />
        </div>
      </div>

      <div className={styles.flexCol}>
        <div className={styles.flex}>
          <h3 className={styles.title}>WHO AM I?</h3>
          <div className={styles.arrowIcon}>
            <DoubleArrowSharpIcon style={{ fontSize: "40px" }} />
          </div>
        </div>
        <p>DeepL is blah blah blah blah</p>
      </div>
    </section>
  );
}
