import React from "react";
import styles from "./Title.module.css";

export default function Title() {
  return (
    <div className={styles.titleWrapper}>
      <div className={styles.titleArea}>
        <h2 className={styles.title}>
          D E E P L <span>lerning...</span>
        </h2>
        <div>
          <p className={styles.explanation}>explanation</p>
          <p className={styles.explanation}>explanation</p>
          <p className={styles.explanation}>explanation</p>
          <p className={styles.explanation}>explanation</p>
        </div>
      </div>
    </div>
  );
}
