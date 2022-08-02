import { BrowserRouter, Routes, Route } from "react-router-dom";
import Account from "./components/pages/account/Account";
import { NotFound } from "./components/pages/errorPages/NotFound";
import Loading from "./components/pages/loading/Loading";
import Main from "./components/pages/mainPage/Main";
import { Authentication } from "./components/pages/registration/Authentication";
import TranslatorStart from "./components/pages/translator/TranslatorStart";
import TranslatorMain from "./components/pages/translator/TranslatorMain";
import { ServerError } from "./components/pages/errorPages/ServerError";
import { Logout } from "./components/pages/registration/Logout";

export const Router: () => JSX.Element = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={`/`} element={<Loading />} />
          <Route path={`/home`} element={<Main />} />
          <Route path={`/authentication/:mode`} element={<Authentication />} />
          <Route path={`/logout`} element={<Logout />} />
          <Route path={`/translator`} element={<TranslatorStart />} />
          <Route path={`/translator-main`} element={<TranslatorMain />} />
          <Route path={`/account`} element={<Account />} />
          <Route path={`/server-error`} element={<ServerError />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
