import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import {
  Drawer,
  Button,
  Container,
  Typography,
  Toolbar,
  Box,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { pages } from "../../assets/items/navbarItems";
import { navbarStyles } from "./navbar.styles";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  return (
    <Container component="nav" maxWidth="xl" sx={navbarStyles.outerWrapper}>
      <Toolbar disableGutters style={navbarStyles.toolbar}>
        <Link href="/">
          <Typography variant="h1" noWrap sx={navbarStyles.logo}>
            Car Dealer
          </Typography>
        </Link>
        <Box sx={navbarStyles.wrapper}>
          {pages.map(({ title, href }) => (
            <Link href={href} key={title} style={navbarStyles.navLink}>
              <Button
                sx={
                  router.pathname == href
                    ? navbarStyles.navButtonActive
                    : router.pathname == "/"
                    ? navbarStyles.navButton
                    : navbarStyles.navButtonSecondary
                }
              >
                {title}
              </Button>
            </Link>
          ))}
        </Box>

        <IconButton
          onClick={() => setIsMenuOpen(true)}
          sx={
            router.pathname == "/"
              ? navbarStyles.hamburger
              : navbarStyles.hamburgerSecondary
          }
        >
          <MenuIcon />
        </IconButton>
        <Drawer
          open={isMenuOpen}
          onClose={() => setIsMenuOpen(false)}
          PaperProps={{
            sx: navbarStyles.drawer,
          }}
        >
          {pages.map(({ title, href }) => (
            <Link key={title} href={href} onClick={() => setIsMenuOpen(false)}>
              <Button
                sx={
                  router.pathname == href
                    ? navbarStyles.navButtonActiveMobile
                    : navbarStyles.navButtonMobile
                }
              >
                {title}
              </Button>
            </Link>
          ))}
        </Drawer>
      </Toolbar>
    </Container>
  );
}
