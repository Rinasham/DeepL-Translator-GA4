import { Link, useNavigate } from "react-router-dom";
import styles from "./NavModal.module.css";

type NavModalProps = {
  setModalOn: React.Dispatch<React.SetStateAction<boolean>>;
  isMobile: "mobile" | "desktop";
};

export default function NavModal(props: NavModalProps) {
  const { setModalOn, isMobile } = props;
  const navigation = useNavigate();

  return (
    <div
      className={styles.wrapper}
      style={{ flexDirection: isMobile === "mobile" ? "column" : "row" }}
    >
      <h2
        className={styles.title}
        style={{ flex: isMobile === "mobile" ? "1" : "2" }}
      >
        AGB <span>lerning...</span>
      </h2>
      <div className={styles.menuItems}>
        <p
          className={styles.navLink}
          onClick={() => {
            setModalOn(false);
            navigation("/home");
          }}
        >
          HOME
        </p>
        <Link to="/translator" className={styles.navLink}>
          LEARN
        </Link>
        <Link to="/aboutme" className={styles.navLink}>
          ABOUT ME
        </Link>
      </div>
      <div className={styles.address}>
        <p>CHATSWOOD,</p>
        <p>SYDNEY</p>
        <p>2067</p>
        <p>AUSTRALIA</p>
      </div>
    </div>
  );
}
