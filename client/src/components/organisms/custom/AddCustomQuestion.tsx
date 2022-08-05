import React from "react";
import { Input } from "@mui/material";

import { PrimaryButton } from "../../atoms/Buttons";
import { useCustom } from "../../../hooks/useCustom";
import styles from "./CustomQuestion.module.css";

export const AddCustomQuestion = () => {
  const {
    onClickAddCustomQuestion,
    inputQuesion,
    setInputQuestion,
    errorMessage,
  } = useCustom();

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h2>ADD CUSTOM QUESTION</h2>
        <Input
          className={styles.form}
          type="text"
          placeholder="QUESTION"
          onChange={(e) => {
            setInputQuestion(e.target.value);
          }}
        />

        <PrimaryButton text="ADD" onClickFunc={onClickAddCustomQuestion} />
      </div>

      <p className={styles.errorMessage}>{errorMessage}</p>
    </div>
  );
};
