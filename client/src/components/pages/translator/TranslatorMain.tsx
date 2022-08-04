import { Layout } from "../../organisms/layout/Layout";
import { useQuestion } from "../../../hooks/useGetQuestion";
import Theme from "../../organisms/theme/Theme";
import { TranslateTitle } from "../../molecules/translate/TranslateTitle";
import { Steps } from "../../molecules/translate/Steps";
import { Form } from "../../organisms/form/Form";
import styles from "./Translator.module.css";
import { useTranslator } from "../../../hooks/useTranslator";
import { FormModal } from "../../organisms/layout/modal/FormModal";
import { Comparison } from "../../molecules/translate/comparison/Comparison";
import { PrimaryButton } from "../../atoms/Buttons";

export default function TranslatorMain() {
  const { selectedQuestion } = useQuestion();

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
    AIanswer,
    step,
    onClickToMain,
    mode,
  } = useTranslator();

  return (
    <Layout>
      <Theme>
        <div className={styles.contentsWrapper}>
          <TranslateTitle language={language} />
          <Steps step={step} mode={mode} />
          <p className={styles.question}>
            {selectedQuestion.selectedObj.question}
          </p>
          <div>
            {language === "english" && (
              <>
                <p>あなたの解答</p>
                <p>{answers.ja_answer}</p>
              </>
            )}
          </div>
          {language === "compare" ? (
            <>
              <Comparison AIanswer={AIanswer} answers={answers} mode={mode} />
              <PrimaryButton text="HOME" onClickFunc={onClickToMain} />
            </>
          ) : (
            <Form
              inputText={inputText}
              handleOpen={handleOpen}
              onChangeInputText={onChangeInputText}
              onClickSubmitForm={onClickSubmitForm}
              mode={mode}
            />
          )}

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
