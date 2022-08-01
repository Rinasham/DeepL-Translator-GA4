import { useState, ChangeEvent, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { postLogin, postSignUp } from "../api/register";
import { userState } from "../store/userState";
import { useCookies } from "react-cookie";

export const useRegister = () => {
  const [userInfo, setUserInfo] = useRecoilState(userState);
  const navigate = useNavigate();
  const params = useParams();

  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [authMode, setAuthMode] = useState<string>("signup");
  const [cookies, setCookie, removeCookie] = useCookies();

  useEffect(() => {
    console.log(params.mode);
    if (params.mode === "login") {
      setAuthMode("login");
    }
  }, []);

  const changeMode = () => {
    if (authMode === "signup") {
      setAuthMode("login");
    } else if (authMode === "login") {
      setAuthMode("signup");
    } else {
      console.log("ありません");
    }
  };

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
      if (userName === "" || password === "" || confirmPassword === "") {
        setErrorMessage("Fill in all the fields");
      }

      setIsLoading(true);
      postSignUp({ user_name: userName, password: password })
        .then((result) => {
          if (result.status === 400 || result.status === 401) {
            console.log(result);
            console.log("400???");
            setErrorMessage(result.data.message);
          } else {
            postLogin({ user_name: userName, password: password })
              .then((res) => {
                console.log(res.status + " :login");
                if (res.status === 400 || res.status === 401) {
                  setErrorMessage(res.data.message);
                } else if (res.success) {
                  console.log("ナビゲーション");
                  console.log(res.data.token);

                  // atomの更新関数をここで読んで、Recoilでデータを保存
                  // setUserInfo(result);
                  // console.log(result);
                  // localStorage.setItem("token", result.access_token);
                  // navigate("/home");
                  setCookie("token", res.data.token);
                }
              })
              .catch((err) => console.log(err))
              .finally(() => setIsLoading(false));
          }
        })
        .catch((err) => console.log(err))
        .finally(() => setIsLoading(false));
    } else {
      setErrorMessage("Password does not match");
    }
  };

  const onClickLogin = () => {
    // userNameとpasswordが空だったら発火しない
    if (userName !== "" && password !== "") {
      if (isLoading) {
        return;
      }
      setIsLoading(true);
      postLogin({ user_name: userName, password: password })
        .then((res) => {
          console.log(res.status + " :login");
          if (res.status === 400 || res.status === 401) {
            setErrorMessage(res.data.message);
          } else {
            if (res.success) {
              setCookie("token", res.token);
              navigate("/home");
            }
          }
        })
        .catch((err) => {
          setErrorMessage(
            "ログインできませんでした。入力内容をお確かめください。"
          );
        })
        .finally(() => setIsLoading(false));
    } else {
      setErrorMessage("入力内容をお確かめください。");
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
    changeMode,
    authMode,
    onClickLogin,
  };
};
