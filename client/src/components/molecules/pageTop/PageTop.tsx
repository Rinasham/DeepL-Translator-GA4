import React from "react";
import styles from "./PageTop.module.css";
import KeyboardDoubleArrowUpSharpIcon from "@mui/icons-material/KeyboardDoubleArrowUpSharp";

export default function PageTop() {
  const onClickPageTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.pageTop} onClick={onClickPageTop}>
      <KeyboardDoubleArrowUpSharpIcon />
      <p className={styles.pageTopText}>PAGE TOP</p>
    </div>
  );
}
