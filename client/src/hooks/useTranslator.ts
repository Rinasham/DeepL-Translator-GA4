import { useState } from "react";
import { postJapaneseAnswer, postSetQuestionDone } from "../api/postQuestion";
import { Answers } from "../interface/translator";
import { useNavigate } from "react-router";
import { useLocation } from "react-router";
import { Question } from "../interface/translator";
import { useRecoilState } from "recoil";
import { modeState } from "../store/modeState";
import { useCookies } from "react-cookie";

export const useTranslator = () => {
  const navigation = useNavigate();
  const location = useLocation();
  const [cookies, setCookie, removeCookie] = useCookies();

  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState<string>("japanese");
  const [inputText, setInputText] = useState<string>("");
  const [AIanswer, setAIanswer] = useState<string>("");
  const [answers, setAnswers] = useState<Answers>({
    ja_answer: "",
    en_answer: "",
  });
  const [step, setStep] = useState<number>(0);
  const [mode, setMode] = useRecoilState(modeState);
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
      setStep(step + 1);
      handleClose();
    } else if (language === "english") {
      setLanguage("compare");
      setStep(step + 1);
      postSetQuestionDone(
        cookies.userId,
        selectedQuestion.selectedObj.id,
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

  const onClickToMain = () => {
    navigation("/home");
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
    step,
    onClickToMain,
    mode,
  };
};
