import React from "react";
import styles from "./Home.module.css";
import DoubleArrowSharpIcon from "@mui/icons-material/DoubleArrowSharp";

export default function HomeWhoAmI() {
  return (
    <div className={styles.intro}>
      <div className={styles.flex}>
        <h3>WHO AM I?</h3>
        <DoubleArrowSharpIcon style={{ fontSize: "40px" }} />
      </div>
      <p>DeepL is blah blah blah blah</p>
    </div>
  );
}
