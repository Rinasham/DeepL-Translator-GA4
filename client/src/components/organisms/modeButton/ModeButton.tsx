import React from "react";
import styles from "./ModeButton.module.css";
import Switch from "@mui/material/Switch";

interface Mode {
  mode: boolean;
  changeMode: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const ModeButton: React.FC<Mode> = (props) => {
  return (
    <div className={styles.modeBtn}>
      <p>DARK</p>
      <Switch
        checked={props.mode}
        onChange={props.changeMode}
        inputProps={{ "aria-label": "controlled" }}
      />
      <p>LIGHT</p>
    </div>
  );
};
