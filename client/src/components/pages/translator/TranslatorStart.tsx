import Theme from "../../organisms/theme/Theme";
import styles from "./Translator.module.css";
import { useQuestion } from "../../../hooks/useGetQuestion";
import { Link } from "react-router-dom";
import { Layout } from "../../organisms/layout/Layout";
import { useRecoilValue } from "recoil";
import { modeState } from "../../../store/modeState";

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
                      <svg
                        className={styles.checkIcon}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
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
