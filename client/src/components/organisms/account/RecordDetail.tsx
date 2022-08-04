import { PrimaryButton } from "../../atoms/Buttons";
import { DoneQuestion } from "./../../../interface/account";
import styles from "./Account.module.css";
import { modeState } from "../../../store/modeState";
import { useRecoilValue } from "recoil";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

type RecordProps = {
  question: DoneQuestion | undefined;
  setTablePage: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function RecordDetail(props: RecordProps) {
  const { question, setTablePage } = props;

  const mode = useRecoilValue(modeState);

  return (
    <div>
      {question ? (
        <div className={styles.detailWrapper}>
          <div className={styles.detailFlexItems}>
            <p>問題</p>
            <div className={styles.iconWrapper}>
              <KeyboardDoubleArrowRightIcon style={{ fontSize: "20px" }} />
            </div>
            <p>{question.question}</p>
          </div>
          <div className={styles.detailFlexItems}>
            <p>日本語の解答</p>
            <div className={styles.iconWrapper}>
              <KeyboardDoubleArrowRightIcon style={{ fontSize: "20px" }} />
            </div>
            <p>{question.jap_answer}</p>
          </div>
          <div className={styles.comparisonWrapper}>
            <div className={styles.answerBox}>
              <div className={`${styles.answerTitle} ${styles.yourAnswer}`}>
                あなたの英語の解答
              </div>
              <div
                className={styles.answerContentBox}
                style={{
                  color: mode.style ? "#384449" : "#fdfbf6",
                  border: mode.style ? "#384449  1px solid" : "gray 1px solid",
                  borderTop: "none",
                }}
              >
                {question.eng_answer}
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
                  borderTop: "none",
                }}
              >
                {question.ai_answer}
              </div>
            </div>
          </div>
          <PrimaryButton
            text="BACK"
            onClickFunc={() => {
              setTablePage(false);
            }}
          />
        </div>
      ) : (
        <div className={styles.detailWrapper}>
          <PrimaryButton
            text="BACK"
            onClickFunc={() => {
              setTablePage(false);
            }}
          />
        </div>
      )}
    </div>
  );
}
