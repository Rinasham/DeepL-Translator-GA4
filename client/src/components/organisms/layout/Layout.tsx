import Header from "../header/Header";
import Theme from "../theme/Theme";
import { LayoutProps } from "../../../interface/layout";
import Footer from "../footer/Footer";

export const Layout = (props: LayoutProps) => {
  const { children } = props;

  return (
    <div>
      <Header />
      <Theme children={children} />
      <Footer />
    </div>
  );
};
