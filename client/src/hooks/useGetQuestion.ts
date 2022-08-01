import { useState } from "react";
import { useLocation } from "react-router";
import { useNavigate } from "react-router";
import { Question } from "../interface/translator";
import { getAllQuestions } from "../api/getQuestion";

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
  const [questions, setQuestions] = useState<Question[]>([]);

  // TranslatorStart
  const onClickLevels = async (level: string) => {
    setLoading(true);
    const fetchedQuestions: Question[] = await getAllQuestions(level);
    console.log(fetchedQuestions);
    if (!fetchedQuestions) {
      navigation("/authentication/login");
    }

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
  };
};
