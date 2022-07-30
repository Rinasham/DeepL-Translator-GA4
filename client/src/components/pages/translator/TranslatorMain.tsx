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
    japAnswer,
    engAnswer,
    open,
    handleOpen,
    handleClose,
    inputText,
    onChangeInputText,
    onClickSubmitForm,
    onClickConfirmation,
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


  return (
    <Layout>
      <Theme>
        <div className={styles.contentsWrapper}>
          <TranslateTitle />
          <Steps language={language} />
          <p>{selectedQuestion.selectedObj.question}</p>
          <Form
            inputText={inputText}
            language={"japanese"}
            handleOpen={handleOpen}
            onChangeInputText={onChangeInputText}
            onClickSubmitForm={onClickSubmitForm}
          />
          {open ? (
            language === "japanese" ? (
              <FormModal
                open={open}
                handleClose={handleClose}
                answer={japAnswer}
                onClickConfirmation={onClickConfirmation}
              />
            ) : (
              <FormModal
                open={open}
                handleClose={handleClose}
                answer={engAnswer}
                onClickConfirmation={onClickConfirmation}
              />
            )
          ) : null}
        </div>
      </Theme>
    </Layout>
  );
}
