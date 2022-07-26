import styles from "./ModeButton.module.css";
import Switch from "@mui/material/Switch";
import { useRecoilValue } from "recoil";
import { modeState } from "../../../store/modeState";

type ModeProps = {
  switchHandler: () => void;
};

export const ModeButton = (props: ModeProps) => {
  const { switchHandler } = props;
  const mode = useRecoilValue(modeState);

  return (
    <div className={styles.modeBtn}>
      <p>DARK</p>
      <Switch
        checked={mode.style}
        color="default"
        onChange={switchHandler}
        inputProps={{ "aria-label": "controlled" }}
      />
      <p>LIGHT</p>
    </div>
  );
};
