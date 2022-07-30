import { Answers } from "../../../../interface/translator";
import styles from "./Comparison.module.css";

type ComparisonProps = {
  AIanswer: string;
  answers: Answers;
};

export const Comparison = (props: ComparisonProps) => {
  const { AIanswer, answers } = props;

  return (
    <div className={styles.comparisonWrapper}>
      <div className={styles.answerBox}>
        <div className={`${styles.answerTitle} ${styles.yourAnswer}`}>
          あなたの回答
        </div>
        <div className={`${styles.answerContentBox} ${styles.yourAnswer}`}>
          {answers.en_answer}
        </div>
      </div>
      <div className={styles.answerBox}>
        <div className={`${styles.answerTitle} ${styles.aiAnswer}`}>
          AIの回答
        </div>
        <div className={`${styles.answerContentBox} ${styles.aiAnswer}`}>
          {AIanswer}
        </div>
      </div>
    </div>
  );
};
