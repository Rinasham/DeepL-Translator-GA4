import { useNavigate } from "react-router";
import { getUserHistory } from "../api/getUser";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

export type DoneQuestion = {
  id: number;
  user_id: number;
  question_id: number;
  jap_answer: string;
  eng_answer: string;
  memo?: string;
  favorite: boolean;
  genre: string;
  level: string;
  question: string;
  description?: string;
};

export const useAccount = () => {
  const navigation = useNavigate();
  const [isLoading, setLoading] = useState<boolean>(false);
  const [cookies, setCookie, removeCookie] = useCookies();
  const [doneQuestions, setDoneQuestions] = useState<DoneQuestion[]>([]);

  if (!cookies.name) {
    navigation("/authentication/login");
  }

  const getUserData = async () => {
    setLoading(true);
    const doneQuestionsHistory = await getUserHistory(cookies.userid);
    console.log(doneQuestionsHistory);
    if (doneQuestionsHistory) {
      setDoneQuestions(doneQuestionsHistory);
    }
    setLoading(false);
  };

  useEffect(() => {
    getUserData();
  }, []);

  return {
    isLoading,
    cookies,
    doneQuestions,
  };
};
