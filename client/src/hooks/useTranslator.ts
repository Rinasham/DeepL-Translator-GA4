import { useState } from "react";
import { postJapaneseAnswer, postSetQuestionDone } from "../api/postQuestion";
import { Answers } from "../interface/translator";
import { useNavigate } from "react-router";
import { useLocation } from "react-router";
import { Question } from "../interface/translator";
import { userState } from "../store/userState";
import { useRecoilValue } from "recoil";

export const useTranslator = () => {
  const navigation = useNavigate();
  const location = useLocation();
  const userInfo = useRecoilValue(userState);

  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState<string>("japanese");
  const [inputText, setInputText] = useState<string>("");
  const [AIanswer, setAIanswer] = useState<string>("");
  const [answers, setAnswers] = useState<Answers>({
    ja_answer: "",
    en_answer: "",
  });
  const [selectedQuestion, setSelectedQuestion] = useState<{
    selectedObj: Question;
  }>(location.state as { selectedObj: Question });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const onChangeInputText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    setInputText(text);
  };

  const onClickSubmitForm = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (language === "japanese") {
      setAnswers({ ...answers, ja_answer: inputText });
    } else if (language === "english") {
      setAnswers({ ...answers, en_answer: inputText });
    }
  };

  // post answer to server
  const onClickConfirmation = () => {
    if (language === "japanese") {
      postAnswer();
      setLanguage("english");
      setInputText("");
      handleClose();
    } else if (language === "english") {
      setLanguage("compare");
      postSetQuestionDone(
        userInfo.id,
        selectedQuestion.selectedObj.id,
        // answers.ja_answer,
        // inputText
        answers
      );
      handleClose();
    }
  };

  const postAnswer = async () => {
    const translated_en_answer = await postJapaneseAnswer(answers.ja_answer);

    if (translated_en_answer) {
      setAIanswer(translated_en_answer);
    } else {
      navigation("/server-error", { replace: false });
    }
  };

  return {
    onChangeInputText,
    onClickSubmitForm,
    onClickConfirmation,
    language,
    open,
    handleOpen,
    handleClose,
    inputText,
    answers,
    AIanswer,
  };
};
