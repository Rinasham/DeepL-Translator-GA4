import React from "react";
import styles from "./PageTop.module.css";
import KeyboardDoubleArrowUpSharpIcon from "@mui/icons-material/KeyboardDoubleArrowUpSharp";

export default function PageTop() {
  return (
    <div className={styles.pageTop}>
      <KeyboardDoubleArrowUpSharpIcon />
      <p className={styles.pageTopText}>PAGE TOP</p>
    </div>
  );
}
