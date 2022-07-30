import { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router";
import axios from "axios";
import { useNavigate } from "react-router";
import { Question } from "../interface/translator";
import { getAllQuestions, getOneQuestion } from "../api/getQuestion";

const URL: string | undefined = process.env.REACT_APP_LOCAL_API;

export const useQuestion = () => {
  const navigation = useNavigate();
  // const { question } = useParams<{ questionId: string }>();
  const location = useLocation();
  const [selectedQuestion, setSelectedQuestion] = useState<{
    selectedObj: Question;
  }>(location.state as { selectedObj: Question });
  // const intQuestionId = parseInt(questionId !== undefined ? questionId : "");
  const [isLoading, setLoading] = useState<boolean>(false);
  const [isLevelSelected, setLevelSelected] = useState<boolean>(false);
  // const [selectedQuestion, setSelectedQuestion] = useState<Question>();
  const [questions, setQuestions] = useState<Question[]>([]);

  // TranslatorStart
  const onClickLevels = async (level: string) => {
    setLoading(true);
    const fetchedQuestions: Question[] = await getAllQuestions(level);
    console.log(fetchedQuestions);

    setQuestions(fetchedQuestions);
    setLevelSelected(true);
    setLoading(false);
  };

  // TrasnslatorStart
  const onClickToMainPage = (questionObj: Question) => {
    // setSelectedQuestion(questionObj);
    console.log(questionObj);

    navigation(`/translator-main`, {
      state: { selectedObj: questionObj },
    });
  };

  // TranslatorMain
  const getQuestion = async () => {
    setLoading(true);
    // const fetchedQuestion = await getOneQuestion(intQuestionId);

    setLoading(false);
  };

  return {
    isLoading,
    setLoading,
    onClickLevels,
    isLevelSelected,
    questions,
    getQuestion,
    selectedQuestion,
    setSelectedQuestion,
    // intQuestionId,
    onClickToMainPage,
  };
};
