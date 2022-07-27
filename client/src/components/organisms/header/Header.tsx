import styles from "./Header.module.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import ToolBar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { COLORS } from "../../constants/colors";
import { Avatar, Container, Divider, SwipeableDrawer } from "@mui/material";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { ChevronRight } from "@mui/icons-material";
import { useHeader } from "../../../hooks/useHeader";

const navigationLinks = [
  { name: "Home", href: "home" },
  { name: "Learn", href: "start" },
  { name: "Account", href: "account" },
];

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
  const isSM = useMediaQuery({ query: "(max-width: 600px)" });
  const {
    isBurgerMenuOpen,
    setBurgerMenuOpen,
    openBurgerMenu,
    closeBurgerMenu,
  } = useHeader();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        style={{ color: COLORS.ASH_BEIGH, backgroundColor: COLORS.DARK_BLUE }}
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
                <Link key={idx} className={styles.links} to={item.href}>
                  {item.name}
                </Link>
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
                <Link className={styles.links} to={item.href}>
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
