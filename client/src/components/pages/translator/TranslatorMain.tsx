import { useEffect, useState } from "react";
import { Layout } from "../../organisms/layout/Layout";
import { useQuestion } from "../../../hooks/useGetQuestion";
import Theme from "../../organisms/theme/Theme";
import { TranslateTitle } from "../../molecules/translate/TranslateTitle";
import { Steps } from "../../molecules/translate/Steps";
import { Form } from "../../organisms/layout/form/Form";
import styles from "./Translator.module.css";

import { useTranslator } from "../../../hooks/useTranslator";
import Modal from "@mui/material/Modal";
import { Box, Button, Typography } from "@mui/material";
import { FormModal } from "../../organisms/layout/modal/formModal/FormModal";

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
    onClickSubmitForm
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
          <Steps />
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
              />
            ) : (
              <FormModal
                open={open}
                handleClose={handleClose}
                answer={engAnswer}
              />
            )
          ) : null}
          <p>{inputText}</p>
        </div>
      </Theme>
    </Layout>
  );
}
