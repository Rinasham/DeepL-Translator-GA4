import { atom } from "recoil";
import { User } from "../interface/user";

export const userState = atom<User>({
  key: "userState",
  default: {
    id: 0,
    name: "",
    token: "",
  },
});
