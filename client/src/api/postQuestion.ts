import axios from "axios";
import { Question } from "../interface/translator";
const URL: string | undefined = process.env.REACT_APP_LOCAL_API;

export const postJapaneseAnswer = (japAnswer: string) => {
  return axios
    .post(`${URL}api/translate/checkanswer/ja`,{
      answer: japAnswer
    })
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
export const postEnglishAnswer = (engAnswer: string) => {
  return axios
    .post(`${URL}api/translate/checkanswer/en`,{
      answer: engAnswer
    })
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};