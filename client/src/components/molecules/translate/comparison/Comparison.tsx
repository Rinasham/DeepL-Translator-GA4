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
          あなたの解答
        </div>
        <div
          className={styles.answerContentBox}
          style={{
            color: mode.style ? "#384449" : "#fdfbf6",
            border: mode.style ? "#384449  1px solid" : "gray 1px solid",
          }}
        >
          {answers.en_answer}
        </div>
      </div>
      <div className={styles.answerBox}>
        <div className={`${styles.answerTitle} ${styles.aiAnswer}`}>
          AIの解答
        </div>
        <div
          className={styles.answerContentBox}
          style={{
            color: mode.style ? "#384449" : "#fdfbf6",
            border: mode.style ? "#384449  1px solid" : "gray 1px solid",
          }}
        >
          {AIanswer}
        </div>
      </div>
    </div>
  );
};
