import { atom } from "recoil";
import { Mode } from "../interface/layout";

export const modeState = atom({
  key: "modeState",
  default: {
    style: true,
  },
});
