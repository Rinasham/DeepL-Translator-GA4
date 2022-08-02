import axios, { AxiosResponse } from "axios";
import { User, SignupUser } from "../interface/user";
// const URL: string | undefined = process.env.REACT_APP_LOCAL_API;
const URL: string | undefined = "/";

export const postLogin = async (props: SignupUser) => {
  const { user_name, password } = props;

  const formData = {
    user_name: user_name,
    password: password,
  };

  try {
    const result = await axios.post<User>(`${URL}api/users/login`, formData);
    return result.data;
  } catch (err: any) {
    return err.response;
    // throw new Error(err);
  }
};

export const postSignUp = async (props: SignupUser) => {
  const { user_name, password } = props;

  const formData = {
    user_name: user_name,
    password: password,
  };

  try {
    const result = await axios.post<User>(`${URL}api/users/signup`, formData);
    console.log(result);
    return result.data;
  } catch (err: any) {
    return err.response;
    // throw new Error(err);
  }
};
