import axios from "axios";
import { Question } from "../interface/translator";
const URL: string | undefined = process.env.REACT_APP_LOCAL_API;

axios.defaults.withCredentials = true;

export const getAllQuestions = (level: string) => {
  return axios
    .get(`${URL}api/translate/${level}`)
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getOneQuestion = (questionId: number) => {
  console.log(questionId);

  axios
    .get(`${URL}api/translate/question/${questionId}`)
    .then((res) => {
      console.log(res.data[0]);
      return res.data[0];
    })
    .catch((err) => {
      console.log(err);
    });
};
