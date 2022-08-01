import axios from "axios";
const URL: string | undefined = process.env.REACT_APP_LOCAL_API;

axios.defaults.withCredentials = true;

export const getUser = () => {
  return axios
    .get(`${URL}api/account`)
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((err) => {
      console.log(err);
    });
};
