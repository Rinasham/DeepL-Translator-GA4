import { useState } from "react";
import { postJapaneseAnswer } from "../api/postQuestion";

export const useTranslator = () => {
  const [language, setLanguage] = useState<string>("japanese");
  const [japAnswer, setJapAnswer] = useState<string>("");
  const [engAnswer, setEngAnswer] = useState<string>("");
  const [inputText, setInputText] = useState<string>("");


  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const onChangeInputText = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const text = e.target.value;
    setInputText(text);
  };

  const onClickSubmitForm = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("submit");
    console.log(language);
    if (language === "japanese") {
      setJapAnswer(inputText);
    } else {
      setEngAnswer(inputText);
    }
  };


  // post answer to server
  const onClickConfirmation = () => {
    if (language === 'japanese') {
      postJapaneseAnswer(japAnswer)
    }
  }

  return {
    onChangeInputText,
    onClickSubmitForm,
    language,
    japAnswer,
    engAnswer,
    open,
    handleOpen,
    handleClose,
    inputText,
  };
};
