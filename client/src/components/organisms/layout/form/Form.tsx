import React, { memo } from "react";
import styles from "./Form.module.css";

type FormProps = {
  handleOpen: () => void;
  inputText: string;
  onChangeInputText: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onClickSubmitForm: (e: { preventDefault: () => void }) => void;
  mode: {
    style: boolean;
  };
};

export const Form: React.FC<FormProps> = memo(
  ({ handleOpen, inputText, onChangeInputText, onClickSubmitForm, mode }) => {
    return (
      <>
        <form className={styles.formTextarea}>
          <textarea
            rows={5}
            value={inputText}
            style={{
              backgroundColor: mode.style ? "#fdfbf6" : "#706f6d",
              color: mode.style ? "#384449" : "#fdfbf6",
            }}
            onChange={(e) => {
              onChangeInputText(e);
            }}
          />
          <button
            className={styles.formButton}
            style={{
              backgroundColor: mode.style ? "#2e4448" : "#3d94aa",
            }}
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
  }
);
