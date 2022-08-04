import styles from "./Header.module.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import ToolBar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { COLORS } from "../../constants/colors";
import { Avatar, Container, Divider, SwipeableDrawer } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { ChevronRight } from "@mui/icons-material";
import { useHeader } from "../../../hooks/useHeader";
import { useCookies } from "react-cookie";

type NavigationLink = {
  name: string;
  href: string;
  type: string;
};

let navigationLinks: NavigationLink[] = [];

const avatarStyle = {
  marginRight: "auto",
  color: "var(--OFF_WHITE)",
  backgroundColor: "var(--ASH_BLACK)",
  borderRadius: "0",
  height: "30px",
  border: "4px solid gray",
  borderLeft: "16px solid transparent",
  borderRight: "16px solid transparent",
  fontFamily: "Italiana",
};

export default function Header() {
  const navigation = useNavigate();
  const isSM = useMediaQuery({ query: "(max-width: 600px)" });
  const { isBurgerMenuOpen, openBurgerMenu, closeBurgerMenu } = useHeader();
  const [cookies, setCookie, removeCookie] = useCookies();

  if (cookies.token) {
    navigationLinks = [
      { name: "Home", href: "/home", type: "" },
      { name: "Learn", href: "/translator", type: "" },
      { name: "Account", href: "/account", type: "" },
      { name: "Logout", href: "/logout", type: "" },
    ];
  } else {
    navigationLinks = [
      { name: "Home", href: "/home", type: "" },
      { name: "Learn", href: "/translator", type: "" },
      { name: "Account", href: "/account", type: "" },
      { name: "Login", href: "/authentication", type: "login" },
    ];
  }

  const onClickLink = (href: string, name: string) => {
    if (name === "Login") {
      navigation("/authentication/login");
    } else if (name === "Account" || name === "Learn") {
      if (!cookies.name) {
        navigation("/authentication/login");
      }
    } else {
      navigation(`${href}`);
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }} className={styles.headerWrapper}>
      <AppBar
        position="static"
        style={{ color: COLORS.ASH_BEIGE, backgroundColor: COLORS.DARK_BLUE }}
      >
        <Container maxWidth="xl">
          <ToolBar disableGutters>
            <div className={styles.avatarArea}>
              <Avatar style={avatarStyle}>D</Avatar>
              <p>DeepL</p>
            </div>

            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2, display: { xs: "block", sm: "none" } }}
              onClick={openBurgerMenu}
            >
              <MenuIcon />
            </IconButton>

            {isSM ||
              navigationLinks.map((item, idx) => (
                <li
                  key={idx}
                  className={styles.links}
                  onClick={() => {
                    onClickLink(item.href, item.name);
                  }}
                >
                  {item.name}
                </li>
              ))}
          </ToolBar>
        </Container>
        <SwipeableDrawer
          anchor="right"
          open={isBurgerMenuOpen}
          onOpen={openBurgerMenu}
          onClose={closeBurgerMenu}
        >
          <IconButton className={styles.button} onClick={closeBurgerMenu}>
            <ChevronRight />
          </IconButton>
          <Divider />
          <ul>
            {navigationLinks.map((item, idx) => (
              <li key={idx}>
                <Link
                  className={styles.links}
                  to={item.type ? `${item.href}/${item.type}` : `${item.href}`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </SwipeableDrawer>
      </AppBar>
    </Box>
  );
}
