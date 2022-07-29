import { BrowserRouter, Routes, Route } from "react-router-dom";
import Account from "./components/pages/account/Account";
import { NotFound } from "./components/pages/errorPages/NotFound";
import Loading from "./components/pages/loading/Loading";
import Main from "./components/pages/mainPage/Main";
import Login from "./components/pages/registration/Login";
import { Authentication } from "./components/pages/registration/Authentication";
import TranslatorStart from "./components/pages/translator/TranslatorStart";
import TranslatorMain from "./components/pages/translator/TranslatorMain";

export const Router: () => JSX.Element = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={`/`} element={<Loading />} />
          <Route path={`/home`} element={<Main />} />
          <Route path={`/authentication`} element={<Authentication />} />
          {/* <Route path={`login`} element={<Login />} /> */}
          <Route path={`/translator`} element={<TranslatorStart />} />
          <Route
            path={`/translator-main/:level`}
            element={<TranslatorMain />}
          />
          <Route path={`/account`} element={<Account />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
