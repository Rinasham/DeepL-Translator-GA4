import React from "react";
// import { useTranslator } from "../../../../hooks/useTranslator";
import styles from "./Form.module.css";

type FormProps = {
  language: string;
  handleOpen: () => void;
  inputText: string;
  onChangeInputText: (
    e: React.ChangeEvent<HTMLTextAreaElement>,
    language: string
  ) => void;
  onClickSubmitForm: (e: { preventDefault: () => void }) => void;
};

export const Form: React.FC<FormProps> = ({
  language,
  handleOpen,
  inputText,
  onChangeInputText,
  onClickSubmitForm,
}) => {
  // const { inputText, onChangeInputText, onClickSubmitForm } = useTranslator();

  return (
    <>
      <form className={styles.formTextarea}>
        <textarea
          rows={5}
          value={inputText}
          onChange={(e) => {
            onChangeInputText(e, language);
          }}
        />
        <button
          className={styles.formButton}
          onClick={(e) => {
            onClickSubmitForm(e);
            handleOpen();
          }}
        >
          次へ進む
        </button>
      </form>
    </>
  );
};
