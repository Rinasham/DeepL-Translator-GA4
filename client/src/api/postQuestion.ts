import axios, { AxiosResponse } from "axios";
import { TranslateResponse } from "../interface/translator";
// const URL: string | undefined = process.env.REACT_APP_LOCAL_API;
const URL: string | undefined = "/";

export const postJapaneseAnswer = (japAnswer: string) => {
  return axios
    .post(`${URL}api/translate/checkanswer/ja`, {
      answer: japAnswer,
    })
    .then((res: AxiosResponse<TranslateResponse>) => {
      console.log(res.data.translated_text);
      return res.data.translated_text;
    })
    .catch((err) => {
      console.log(err);
    });
};
// export const postEnglishAnswer = (engAnswer: string) => {
//   return axios
//     .post(`${URL}api/translate/checkanswer/en`, {
//       answer: engAnswer,
//     })
//     .then((res) => {
//       console.log(res.data);
//       return res.data;
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };
