import React, { useState } from "react";
import styles from "./Theme.module.css";
import { COLORS } from "../../constants/colors";
import { ModeButton } from "../modeButton/ModeButton";
import { LayoutProps } from "../../../interface/layout";
import { useRecoilState } from "recoil";
import { modeState } from "../../../store/modeState";

export default function Theme(props: LayoutProps) {
  const { children } = props;

  // const [mode, setMode] = useState(true);
  const [mode, setMode] = useRecoilState(modeState);

  // const changeMode = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setMode(event.target.checked);
  // };

  const switchHandler = () => {
    setMode({ style: !mode.style });
  };

  let style = {};
  if (mode.style === true) {
    style = {
      color: COLORS.ASH_BLACK,
      backgroundColor: COLORS.OFF_WHITE,
    };
  } else {
    style = {
      color: COLORS.OFF_WHITE,
      backgroundColor: COLORS.ASH_BLACK,
    };
  }

  return (
    <div style={style} className={styles.themeWrapper}>
      <ModeButton switchHandler={switchHandler} />
      {children}
    </div>
  );
}
