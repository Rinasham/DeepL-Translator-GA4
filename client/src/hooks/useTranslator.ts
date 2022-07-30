import { useState } from "react";

export const useTranslator = () => {
  const [language, setLanguage] = useState<string>("japanese");
  const [japAnswer, setJapAnswer] = useState<string>("");
  const [engAnswer, setEngAnswer] = useState<string>("");
  const [inputText, setInputText] = useState<string>("");
  const [modalState, setModalState] = useState<boolean>(false);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // let japAnswer = "";
  // let engAnswer = "";

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const onChangeInputText = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
    language: string
  ) => {
    const text = e.target.value;
    setInputText(text);
    // if (language === "japanese") {
    //   // setJapAnswer(text);
    //   japAnswer = text;
    // } else {
    //   // setEngAnswer(text);
    //   engAnswer = text;
    // }
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
