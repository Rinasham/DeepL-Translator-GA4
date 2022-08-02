import { useCookies } from "react-cookie";
import { useNavigate } from "react-router";

export const Logout = () => {
  const [cookies, setCookie, removeCookie] = useCookies();
  const navigation = useNavigate();

  const onClickLogout = () => {
    removeCookie("userid");
    removeCookie("token");
    navigation("/home");
  };

  return (
    <div>
      <h2>YOU WANT TO LOGOUT?</h2>
      <button onClick={onClickLogout}>YES</button>
    </div>
  );
};
