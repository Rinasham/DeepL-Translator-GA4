import { atom } from "recoil";

export const modeState = atom({
  key: "modeState",
  default: {
    style: true,
  },
});
