import { Link } from "@mui/icons-material";
import { useNavigate } from "react-router";
import Header from "../../organisms/header/Header";
import Theme from "../../organisms/theme/Theme";
import styles from "./Translator.module.css";

export default function TranslatorStart() {
  const navigation = useNavigate();

  const onClickLevels = (level: string) => {
    navigation(`/translator-main/${level}`);
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
              <button>EASY</button>
            </li>
            <li
              className={styles.li}
              onClick={() => {
                onClickLevels("normal");
              }}
            >
              <button>NORMAL</button>
            </li>
            <li
              className={styles.li}
              onClick={() => {
                onClickLevels("hard");
              }}
            >
              <button>HARD</button>
            </li>
          </ul>
        </div>
      </Theme>
    </>
  );
}
