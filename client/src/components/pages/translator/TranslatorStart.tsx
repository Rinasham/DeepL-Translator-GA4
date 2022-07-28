import { Link } from "@mui/icons-material";
import { useNavigate } from "react-router";
import Header from "../../organisms/header/Header";
import Theme from "../../organisms/theme/Theme";
import styles from "./Translator.module.css";

export default function TranslatorStart() {
  const onClickLevels = (level: string) => {
    console.log(level);
  };
  return (
    <>
      <Header />
      <Theme>
        <h1>CHOOSE LEVEL</h1>
        <div className="boxWrapper">
          <ul>
            <li
              className={styles.li}
              onClick={() => {
                onClickLevels("easy");
              }}
            >
              EASY
            </li>
            <li
              className={styles.li}
              onClick={() => {
                onClickLevels("normal");
              }}
            >
              NORMAL
            </li>
            <li
              className={styles.li}
              onClick={() => {
                onClickLevels("hard");
              }}
            >
              HARD
            </li>
          </ul>
        </div>
      </Theme>
    </>
  );
}
