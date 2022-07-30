import React from "react";
import { useTranslator } from "../../../../hooks/useTranslator";
import styles from "./Form.module.css";

type FormProps = {
  language: string;
};

export const Form: React.FC<FormProps> = ({ language }) => {
  const { onChangeInputText, onClickSubmitForm } = useTranslator();

  return (
    <form className={styles.formTextarea}>
      <textarea
        rows={5}
        onChange={(e) => {
          onChangeInputText(e);
        }}
      />
      <button
        className={styles.formButton}
        onClick={() => {
          onClickSubmitForm(language);
        }}
      >
        次へ進む
      </button>
    </form>
  );
};
