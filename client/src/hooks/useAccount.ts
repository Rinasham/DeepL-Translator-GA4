import { DoneQuestion } from "./../interface/account";
import { useNavigate } from "react-router";
import { getUserHistory, getCustomHistory } from "../api/getUser";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

export const useAccount = () => {
  const navigation = useNavigate();
  const [isLoading, setLoading] = useState<boolean>(false);
  const [cookies, setCookie, removeCookie] = useCookies();
  const [doneQuestions, setDoneQuestions] = useState<DoneQuestion[]>([]);
  const [isTablePage, setTablePage] = useState<boolean>(false);
  const [selectedQuestion, setSelectedQuestion] = useState<DoneQuestion>();

  const getUserData = async () => {
    setLoading(true);
    const [doneQuestionsHistory, customDoneHistory] = await Promise.all([
      getUserHistory(cookies.userid),
      getCustomHistory(cookies.userid),
    ]);
    // console.log(doneQuestionsHistory);
    if (doneQuestionsHistory) {
      const allHistory = [...doneQuestionsHistory, ...customDoneHistory];
      console.log(allHistory);

      setDoneQuestions(allHistory);
    }
    setLoading(false);
  };

  useEffect(() => {
    getUserData();
  }, []);

  const showTableDetail = (idx: number, question: DoneQuestion) => {
    setTablePage(true);
    setSelectedQuestion(question);
  };

  return {
    isLoading,
    cookies,
    doneQuestions,
    isTablePage,
    setTablePage,
    selectedQuestion,
    showTableDetail,
  };
};
