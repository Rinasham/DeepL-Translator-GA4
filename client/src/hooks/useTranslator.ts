import { useState } from "react";
import { postEnglishAnswer, postJapaneseAnswer } from "../api/postQuestion";
import { Answers } from "../interface/translator";

export const useTranslator = () => {
  const [language, setLanguage] = useState<string>("japanese");
  const [inputText, setInputText] = useState<string>("");
  const [answers, setAnswers] = useState<Answers>({
    ja_answer: "",
    en_answer: "",
  });
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const onChangeInputText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    setInputText(text);
  };

  const onClickSubmitForm = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("submit");
    console.log(language);
    if (language === "japanese") {
      setAnswers({ ...answers, ja_answer: inputText });
    } else {
      setAnswers({ ...answers, en_answer: inputText });
    }
  };

  // post answer to server
  const onClickConfirmation = () => {
    if (language === "japanese") {
      postJapaneseAnswer(answers.ja_answer);
      setLanguage("english");
      setInputText("");
      handleClose();
    } else if (language === "english") {
      postEnglishAnswer(answers.en_answer);
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
  };
};
