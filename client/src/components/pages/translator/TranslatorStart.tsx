import Theme from "../../organisms/theme/Theme";
import styles from "./Translator.module.css";
import { useQuestion } from "../../../hooks/useGetQuestion";
import { Link } from "react-router-dom";
import { Layout } from "../../organisms/layout/Layout";
import { useRecoilValue } from "recoil";
import { modeState } from "../../../store/modeState";
import DoneIcon from "@mui/icons-material/Done";

export default function TranslatorStart() {
  const {
    onClickLevels,
    isLoading,
    isLevelSelected,
    questions,
    onClickToMainPage,
    finifhedQuestions,
  } = useQuestion();

  const mode = useRecoilValue(modeState);
  const modeStyle = mode.style ? "light" : "dark";

  return (
    <Layout>
      <Theme>
        <div className={styles.questionsListWrapper}>
          {isLoading ? (
            <p>Loading...</p>
          ) : isLevelSelected && questions ? (
            <ul style={{ width: "100%" }}>
              {questions.map((question, idx) => {
                return (
                  <li
                    key={idx}
                    className={`${modeStyle} styles.questionLi`}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    onClick={() => {
                      onClickToMainPage(question);
                    }}
                  >
                    {finifhedQuestions.includes(question.id) ? (
                      <DoneIcon
                        style={{
                          fontSize: "20px",
                          marginRight: "1em",
                          color: "#931424",
                        }}
                      />
                    ) : (
                      ""
                    )}

                    <Link to="translator-main" className={styles.link}>
                      {question.question}
                    </Link>
                  </li>
                );
              })}
            </ul>
          ) : (
            <>
              <h1>CHOOSE LEVEL</h1>
              <div className="boxWrapper">
                <ul>
                  <li
                    className={`${modeStyle}`}
                    onClick={() => {
                      onClickLevels("easy");
                    }}
                  >
                    <button className={`${modeStyle} ${styles.chooseButton}`}>
                      EASY
                    </button>
                  </li>
                  <li
                    className={`${modeStyle} `}
                    onClick={() => {
                      onClickLevels("normal");
                    }}
                  >
                    <button className={`${modeStyle} ${styles.chooseButton}`}>
                      NORMAL
                    </button>
                  </li>
                  <li
                    className={styles.li}
                    onClick={() => {
                      onClickLevels("hard");
                    }}
                  >
                    <button className={`${modeStyle} ${styles.chooseButton}`}>
                      HARD
                    </button>
                  </li>
                </ul>
              </div>
            </>
          )}
        </div>
      </Theme>
    </Layout>
  );
}
