import { useNavigate } from "react-router";
import { getUserHistory } from "../api/getUser";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { addCustomQuestion } from "../api/getQuestion";

export const useCustom = () => {
  const [cookies, setCookie, removeCookie] = useCookies();
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [inputQuesion, setInputQuestion] = useState<string>("");
  const navigation = useNavigate();

  const onClickAddCustomQuestion = async () => {
    console.log("add custom");
    if (!inputQuesion) {
      setErrorMessage("Invalid Input");
      return;
    }
    const resStatus = await addCustomQuestion(cookies.userid, inputQuesion);
    if (resStatus === 200) {
      navigation("/translator");
    }
  };

  return {
    onClickAddCustomQuestion,
    inputQuesion,
    setInputQuestion,
    errorMessage,
  };
};
