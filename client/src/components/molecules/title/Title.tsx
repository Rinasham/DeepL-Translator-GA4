import styles from "./Title.module.css";

export default function Title() {
  return (
    <div className={styles.titleWrapper}>
      <div className={styles.titleArea}>
        <h2 className={styles.title}>
          AGB <span>Learning...</span>
        </h2>
        <div className={styles.explanationWrapper}>
          <p className={styles.explanation}>最先端のAIの技術で</p>
          <p className={styles.explanation}>英語を学ぶ ------</p>
          <p className={styles.explanation}>世界で活躍する自分への第一歩</p>
        </div>
      </div>
    </div>
  );
}
