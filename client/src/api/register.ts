import axios from "axios";
import { User, SignupUser } from "../interface/user";
const URL = process.env.REACT_APP_LOCAL_API;

console.log(URL);

export const postLogin = async (props: SignupUser) => {
  const { user_name, password } = props;

  try {
    const result = await axios.post<User>("http://localhost:5000/user/login", {
      user_name: user_name,
      password: password,
    });
    return result.data;
  } catch (err: any) {
    throw new Error(err);
  }
};

export const postSignUp = async (props: SignupUser) => {
  const { user_name, password } = props;

  try {
    const result = await axios.post<User>(
      "http://localhost:5000/user/register",
      {
        user_name: user_name,
        password: password,
      }
    );
    return result.data;
  } catch (err: any) {
    throw new Error(err);
  }
};
