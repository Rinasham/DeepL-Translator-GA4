import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import CloseFullscreenSharpIcon from "@mui/icons-material/CloseFullscreenSharp";
import { COLORS } from "../../constants/colors";
import styles from "./ModalButton.module.css";

type Props = {
  isModalOn: boolean;
  setModalOn: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function ModalButton(props: Props) {
  const { isModalOn, setModalOn } = props;

  const modalOpen = () => {
    setModalOn(true);
  };
  const modalClose = () => {
    setModalOn(false);
  };

  return (
    <div className={styles.buttonWrapper}>
      {isModalOn ? (
        <CloseFullscreenSharpIcon
          className={styles.icon}
          // style={{ fontSize: "40px" }}
          onClick={modalClose}
        />
      ) : (
        <OpenInFullIcon
          className={styles.icon}
          // style={{ fontSize: "40px" }}
          onClick={modalOpen}
        />
      )}
    </div>
  );
}
