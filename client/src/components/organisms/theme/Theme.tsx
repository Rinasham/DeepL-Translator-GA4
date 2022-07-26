import React, { useState } from "react";
import styles from "./Theme.module.css";
import { COLORS } from "../../colors";
import { ModeButton } from "./modeButton/ModeButton";

interface Props {
  children: React.ReactNode;
}

export default function Theme(props: Props) {
  const { children } = props;

  const [mode, setMode] = useState(true);

  const changeMode = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMode(event.target.checked);
  };

  let style = {};
  if (mode === true) {
    style = {
      minHeight: "90vh",
      minWidth: "100vw",
      textAlign: "center",
      backgroundColor: COLORS.OFF_WHITE,
    };
  } else {
    style = {
      minHeight: "90vh",
      minWidth: "100vw",
      textAlign: "center",
      color: COLORS.OFF_WHITE,
      backgroundColor: COLORS.ASH_BLACK,
    };
  }

  return (
    <div style={style}>
      <ModeButton mode={mode} changeMode={changeMode} />
      {children}
    </div>
  );
}
