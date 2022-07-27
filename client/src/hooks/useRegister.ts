import { useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { postLogin, postSignUp } from "../api/register";
import { userState } from "../store/userState";

export const useRegister = () => {
  const [userInfo, setUserInfo] = useRecoilState(userState);
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onChangeUserNameInput = (e: ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  const onChangePasswordInput = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  // for password confirmation
  const onChangeConfirmPasswordInput = (e: ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
  };

  const onClickSignUp = () => {
    if (password === confirmPassword) {
      if (isLoading) {
        return;
      }
      setIsLoading(true);
      postSignUp({ user_name: userName, password: password })
        .then((result) => {
          postLogin({ user_name: userName, password: password })
            .then((result) => {
              // atomの更新関数をここで読んで、Recoilでデータを保存
              setUserInfo(result);
              console.log(result);
              localStorage.setItem("token", result.access_token);
              navigate("/gamestart");
            })
            .catch((err) => console.log(err))
            .finally(() => setIsLoading(false));
        })
        .catch((err) => console.log(err))
        .finally(() => setIsLoading(false));
    } else {
      setErrorMessage("Password does not match");
    }
  };

  return {
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
    postSignUp,
    postLogin,
    onClickSignUp,
  };
};
