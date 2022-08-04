import { useCookies } from "react-cookie";
import styles from "./Account.module.css";

export default () => {
  const [cookies, setCookie, removeCookie] = useCookies();

  const upperCaseName = cookies.name.toUpperCase();

  return <h2>{upperCaseName}</h2>;
};
