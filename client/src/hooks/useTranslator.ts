import { useState } from "react";

export const useTranslator = () => {
  const [language, setLanguage] = useState<string>("japanese");
  const [japAnswer, setJapAnswer] = useState<string>("");
  const [engAnswer, setEngAnswer] = useState<string>("");
  const [inputText, setInputText] = useState<string>("");

  const onChangeInputText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    setInputText(text);
  };

  const onClickSubmitForm = (language: string) => {
    console.log("submit");
  };

  return {
    onChangeInputText,
    onClickSubmitForm,
  };
};
