import React from "react";
import styles from "./Registration.module.css";
import { Button, Input } from "@mui/material";
import { useRegister } from "../../../hooks/useRegister";

export const Authentication: React.FC = () => {
  const {
    password,
    confirmPassword,
    errorMessage,
    onChangeUserNameInput,
    onChangePasswordInput,
    onChangeConfirmPasswordInput,
    onClickSignUp,
    changeMode,
    authMode,
    onClickLogin,
  } = useRegister();

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h2>{authMode === "signup" ? "SIGN UP" : "LOG IN"}</h2>
        <Input
          className={styles.form}
          type="text"
          placeholder="UserName"
          onChange={onChangeUserNameInput}
        />
        <Input
          className={styles.form}
          type="password"
          placeholder="Password"
          onChange={onChangePasswordInput}
          value={password}
        />
        {authMode === "signup" && (
          <Input
            className={styles.form}
            type="password"
            placeholder="Confirm Password"
            onChange={onChangeConfirmPasswordInput}
            value={confirmPassword}
          />
        )}

        {authMode === "signup" ? (
          <Button
            className={styles.button}
            size="small"
            onClick={onClickSignUp}
          >
            SIGN UP
          </Button>
        ) : (
          <Button className={styles.button} size="small" onClick={onClickLogin}>
            LOG IN
          </Button>
        )}
      </div>
      <p className={styles.changeMode} onClick={changeMode}>
        {authMode === "signup"
          ? "Already have an account?"
          : "or create an account from here"}
      </p>
      <p className={styles.errorMessage}>{errorMessage}</p>
    </div>
  );
};
