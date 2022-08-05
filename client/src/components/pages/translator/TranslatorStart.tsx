import Theme from "../../organisms/theme/Theme";
import styles from "./Translator.module.css";
import { useQuestion } from "../../../hooks/useGetQuestion";
import { Link, useNavigate } from "react-router-dom";
import { Layout } from "../../organisms/layout/Layout";
import { useRecoilValue } from "recoil";
import { modeState } from "../../../store/modeState";
import DoneIcon from "@mui/icons-material/Done";
import NavModal from "../../organisms/navModal/NavModal";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import ModalButton from "../../molecules/modalButton/ModalButton";

export default function TranslatorStart() {
  const {
    onClickLevels,
    isLoading,
    isLevelSelected,
    questions,
    onClickToMainPage,
    finifhedQuestions,
    onClickCustomQuestion,
  } = useQuestion();
  const navigation = useNavigate();

  const mode = useRecoilValue(modeState);

  const [isModalOn, setModalOn] = useState<boolean>(false);
  const isSM = useMediaQuery({ query: "(max-width: 600px)" });
  const isMobile = isSM ? "mobile" : "desktop";

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
                    className={styles.questionLi}
                    style={{
                      color: mode.style ? "#384449" : "#ffffff",
                    }}
                    onClick={() => {
                      onClickToMainPage(question);
                    }}
                  >
                    <Link
                      to="translator-main"
                      className={styles.link}
                      style={{
                        color: finifhedQuestions.includes(question.id)
                          ? "lightgray"
                          : "#384449",
                      }}
                    >
                      {question.question}
                    </Link>
                    {finifhedQuestions.includes(question.id) ? (
                      <DoneIcon
                        style={{
                          fontSize: "20px",
                          marginLeft: "1em",
                          color: "#931424",
                        }}
                      />
                    ) : (
                      ""
                    )}
                  </li>
                );
              })}
            </ul>
          ) : (
            <>
              <h1>CHOOSE LEVEL</h1>
              <div>
                <ul>
                  <li
                    className={styles.li}
                    onClick={() => {
                      onClickLevels("easy");
                    }}
                  >
                    <button className={styles.chooseButton}>EASY</button>
                  </li>
                  <li
                    className={styles.li}
                    onClick={() => {
                      onClickLevels("normal");
                    }}
                  >
                    <button className={styles.chooseButton}>NORMAL</button>
                  </li>
                  <li
                    className={styles.li}
                    onClick={() => {
                      onClickLevels("hard");
                    }}
                  >
                    <button className={styles.chooseButton}>HARD</button>
                  </li>
                  <div className={styles.customBox}>
                    <li
                      className={styles.li}
                      onClick={() => {
                        onClickCustomQuestion();
                      }}
                    >
                      <button className={styles.chooseButton}>CUSTOM</button>
                    </li>
                    <button
                      onClick={() => {
                        navigation("/create-custom");
                      }}
                      className={styles.addCustomButton}
                    >
                      ADD
                    </button>
                  </div>
                </ul>
              </div>
            </>
          )}
          {isModalOn && (
            <NavModal setModalOn={setModalOn} isMobile={isMobile} />
          )}
          <ModalButton isModalOn={isModalOn} setModalOn={setModalOn} />
        </div>
      </Theme>
    </Layout>
  );
}
