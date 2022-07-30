import { useEffect, useState } from "react";
import { Layout } from "../../organisms/layout/Layout";
import { useQuestion } from "../../../hooks/useGetQuestion";
import Theme from "../../organisms/theme/Theme";
import { TranslateTitle } from "../../molecules/translate/TranslateTitle";
import { Steps } from "../../molecules/translate/Steps";
import { Form } from "../../organisms/layout/form/Form";
import styles from "./Translator.module.css";

import { useTranslator } from "../../../hooks/useTranslator";
import { FormModal } from "../../organisms/layout/modal/FormModal";

export default function TranslatorMain() {
  const { isLoading, setLoading, getQuestion, selectedQuestion } =
    useQuestion();

  const {
    language,
    open,
    handleOpen,
    handleClose,
    inputText,
    onChangeInputText,
    onClickSubmitForm,
    onClickConfirmation,
    answers,
  } = useTranslator();

  //========================================

  // const fetchQuestion = () => getQuestion();

  // useEffect(() => {
  //   const fetch = async () => {
  //     setLoading(true);
  //     await fetchQuestion();
  //     setLoading(false);
  //   };
  //   fetch();
  // }, []);

  //=====================================
  console.log(language);
  console.log("親");

  return (
    <Layout>
      <Theme>
        <div className={styles.contentsWrapper}>
          <TranslateTitle language={language} />
          <Steps language={language} />
          <p>{selectedQuestion.selectedObj.question}</p>
          <div>
            {language === "english" && (
              <>
                <p>あなたの回答</p>
                <p>{answers.ja_answer}</p>
              </>
            )}
          </div>

          <Form
            inputText={inputText}
            language={"japanese"}
            handleOpen={handleOpen}
            onChangeInputText={onChangeInputText}
            onClickSubmitForm={onClickSubmitForm}
          />
          {open && (
            <FormModal
              open={open}
              handleClose={handleClose}
              answers={answers}
              language={language}
              onClickConfirmation={onClickConfirmation}
            />
          )}
        </div>
      </Theme>
    </Layout>
  );
}
