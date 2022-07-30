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
    selectedQuestion,
    setSelectedQuestion,
    onClickToMainPage,
  } = useQuestion();

  const mode = useRecoilValue(modeState);
  const modeStyle = mode.style ? "light" : "dark";

  return (
    <Layout>
      <Theme>
        <div>
          {isLoading ? (
            <p>Loading...</p>
          ) : isLevelSelected && questions ? (
            <ul>
              {questions.map((question, idx) => {
                return (
                  <li
                    key={idx}
                    className={`${modeStyle}`}
                    onClick={() => {
                      console.log(question.id);

                      onClickToMainPage(question);
                    }}
                  >
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
