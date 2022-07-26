import { useState } from "react";
import { useLocation } from "react-router";
import { useNavigate } from "react-router";
import { Question, CustomQuestion } from "../interface/translator";
import { useCookies } from "react-cookie";
import {
  getAllQuestions,
  getCustomQuestions,
  getDoneQuestions,
} from "../api/getQuestion";

export const useQuestion = () => {
  const navigation = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies();
  // const { question } = useParams<{ questionId: string }>();
  // const intQuestionId = parseInt(questionId !== undefined ? questionId : "");
  const location = useLocation();
  const [selectedQuestion, setSelectedQuestion] = useState<{
    selectedObj: Question;
  }>(location.state as { selectedObj: Question });

  const [isLoading, setLoading] = useState<boolean>(false);
  const [isLevelSelected, setLevelSelected] = useState<boolean>(false);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [isCustomMode, setCustomMode] = useState<boolean>(false);
  const [finifhedQuestions, setFinishedQuestions] = useState<number[]>([]);

  // TranslatorStart
  const onClickLevels = async (level: string) => {
    setLoading(true);
    setCustomMode(false);
    const [fetchedQuestions, doneQuestions] = await Promise.all([
      getAllQuestions(level),
      getDoneQuestions(cookies.userid),
    ]);
    if (doneQuestions) {
      const questions = [];
      for (let question of doneQuestions) {
        questions.push(question.question_id);
      }
      setFinishedQuestions(questions);
    }

    setQuestions(fetchedQuestions);
    setLevelSelected(true);
    setLoading(false);
  };

  const onClickCustomQuestion = async () => {
    setLoading(true);
    setCustomMode(true);
    const customQuestionsRes = await getCustomQuestions(cookies.userid);
    console.log(customQuestionsRes);
    if (customQuestionsRes.length !== 0) {
      setQuestions(customQuestionsRes);
    }
    setLevelSelected(true);
    setLoading(false);
  };

  // TrasnslatorStart
  const onClickToMainPage = (questionObj: Question) => {
    navigation(`/translator-main`, {
      state: { selectedObj: questionObj, isCustom: isCustomMode },
    });
  };

  return {
    isLoading,
    setLoading,
    onClickLevels,
    isLevelSelected,
    questions,
    selectedQuestion,
    setSelectedQuestion,
    // intQuestionId,
    onClickToMainPage,
    finifhedQuestions,
    onClickCustomQuestion,
  };
};
