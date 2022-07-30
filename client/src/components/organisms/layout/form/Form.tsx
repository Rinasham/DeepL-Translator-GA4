import React from "react";
import styles from "./Form.module.css";

type FormProps = {
  language: string;
  handleOpen: () => void;
  inputText: string;
  onChangeInputText: (
    e: React.ChangeEvent<HTMLTextAreaElement>,
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


  return (
    <>
      <form className={styles.formTextarea}>
        <textarea
          rows={5}
          value={inputText}
          onChange={(e) => {
            onChangeInputText(e);
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
