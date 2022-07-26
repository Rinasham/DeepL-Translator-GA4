import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/pages/mainPage/Main";

export const Router: () => JSX.Element = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={`/`} element={<Main />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
};
