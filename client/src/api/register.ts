import axios from "axios";
import { User, SignupUser } from "../interface/user";
const URL: string | undefined = process.env.REACT_APP_LOCAL_API;

console.log(URL);

export const postLogin = async (props: SignupUser) => {
  const { user_name, password } = props;

  try {
    const result = await axios.post<User>(`${URL}api/users/login`, {
      user_name: user_name,
      password: password,
    });

    console.log(result.data);

    return result.data;
  } catch (err: any) {
    throw new Error(err);
  }
};

export const postSignUp = async (props: SignupUser) => {
  const { user_name, password } = props;
  console.log("post signup func");
  console.log(user_name, password);
  console.log(URL);
  // prettier-ignore
  const formData = {
    user_name: user_name,
    password: password,
  };

  try {
    const result = await axios.post<User>(`${URL}api/users/signup`, formData);
    console.log(result.data);
    return result.data;
  } catch (err: any) {
    throw new Error(err);
  }
};
