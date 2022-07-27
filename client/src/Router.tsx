import { BrowserRouter, Routes, Route } from "react-router-dom";
import Account from "./components/pages/account/Account";
import { NotFound } from "./components/pages/errorPages/NotFound";
import GameMain from "./components/pages/game/GameMain";
import GameStart from "./components/pages/game/GameStart";
import Main from "./components/pages/mainPage/Main";
import Login from "./components/pages/registration/Login";
import Signup from "./components/pages/registration/Signup";

export const Router: () => JSX.Element = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={`/`} element={<Main />} />
          <Route path={`signup`} element={<Signup />} />
          <Route path={`login`} element={<Login />} />
          <Route path={`start`} element={<GameStart />} />
          <Route path={`game`} element={<GameMain />} />
          <Route path={`account`} element={<Account />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
