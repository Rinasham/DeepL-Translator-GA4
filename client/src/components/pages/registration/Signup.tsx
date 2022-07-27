import React from "react";
import styles from "./Registration.module.css";
import { Button, Input } from "@mui/material";
import { useRegister } from "../../../hooks/useRegister";

export const Signup: React.FC = () => {
  const {
    userInfo,
    setUserInfo,
    navigate,
    userName,
    setUserName,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    errorMessage,
    setErrorMessage,
    onChangeUserNameInput,
    onChangePasswordInput,
    onChangeConfirmPasswordInput,
    onClickSignUp,
  } = useRegister();

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h2>SIGN UP</h2>
        {/* username欄 */}
        <Input
          className={styles.form}
          type="text"
          placeholder="UserName"
          onChange={onChangeUserNameInput}
        />
        {/* password欄 */}
        <Input
          className={styles.form}
          type="password"
          placeholder="Password"
          onChange={onChangePasswordInput}
          value={password}
        />
        {/* 確認用password欄 */}
        <Input
          className={styles.form}
          type="password"
          placeholder="Confirm Password"
          onChange={onChangeConfirmPasswordInput}
          value={confirmPassword}
        />
        <Button
          className={styles.signupbutton}
          size="small"
          onClick={onClickSignUp}
        >
          Sign up
        </Button>
      </div>
      <p className={styles.errorMessage}>{errorMessage}</p>
    </div>
  );
};
