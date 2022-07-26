import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import { COLORS } from "../../colors";
import styles from "./ModalButton.module.css";

export default function ModalButton() {
  return (
    <div className={styles.buttonWrapper}>
      <OpenInFullIcon style={{ fontSize: "40px" }} />
    </div>
  );
}
