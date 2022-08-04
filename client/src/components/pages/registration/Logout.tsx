import { useCookies } from "react-cookie";
import { useNavigate } from "react-router";
import { PrimaryButton } from "../../atoms/Buttons";
import styles from "./Registration.module.css";

export const Logout = () => {
  const [cookies, setCookie, removeCookie] = useCookies();
  const navigation = useNavigate();

  const onClickLogout = () => {
    removeCookie("userid");
    removeCookie("name");
    removeCookie("token");
    navigation("/home");
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h2 style={{ textAlign: "center" }}>YOU WANT TO LOGOUT?</h2>
        <PrimaryButton text="YES" onClickFunc={onClickLogout} />
      </div>
    </div>
  );
};
