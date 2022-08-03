import { Answers } from "../../../../interface/translator";
import styles from "./Comparison.module.css";

type ComparisonProps = {
  AIanswer: string;
  answers: Answers;
  mode: {
    style: boolean;
  };
};

export const Comparison = (props: ComparisonProps) => {
  const { AIanswer, answers, mode } = props;

  return (
    <div className={styles.comparisonWrapper}>
      <div className={styles.answerBox}>
        <div className={`${styles.answerTitle} ${styles.yourAnswer}`}>
          あなたの回答
        </div>
        <div
          className={styles.answerContentBox}
          style={{ color: mode.style ? "#384449" : "#fdfbf6" }}
        >
          {answers.en_answer}
        </div>
      </div>
      <div className={styles.answerBox}>
        <div className={`${styles.answerTitle} ${styles.aiAnswer}`}>
          AIの回答
        </div>
        <div
          className={styles.answerContentBox}
          style={{ color: mode.style ? "#384449" : "#fdfbf6" }}
        >
          {AIanswer}
        </div>
      </div>
    </div>
  );
};
