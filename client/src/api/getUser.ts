import axios from "axios";

// const URL: string | undefined = process.env.REACT_APP_LOCAL_API;
const URL: string | undefined = "/";

axios.defaults.withCredentials = true;

export const getUserHistory = (userid: number) => {
  return axios
    .get(`${URL}api/account/history/${userid}`)
    .then((res) => {
      return res.data.histories;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getCustomHistory = (userid: number) => {
  return axios
    .get(`${URL}api/account/history/custom/${userid}`)
    .then((res) => {
      console.log(res.data);

      return res.data.histories;
    })
    .catch((err) => {
      console.log(err);
    });
};
