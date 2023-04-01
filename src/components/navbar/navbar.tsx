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
import { pages } from "../assets/items/navbarItems";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  return (
    <Container
      component="nav"
      maxWidth="xl"
      sx={{
        padding: { xs: "0 1rem", md: "0 5rem" },
        position: "absolute",
        left: "50%",
        transform: "translate(-50%)",
        zIndex: "20",
      }}
    >
      <Toolbar
        disableGutters
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <Link href="/">
          <Typography
            variant="h1"
            noWrap
            sx={{
              mr: 2,
              display: { xs: "flex", md: "flex" },
              fontWeight: 700,
              letterSpacing: ".3rem",
              fontSize: "1.5rem",
              color: "#f50057",
              textDecoration: "none",
            }}
          >
            Car Dealer
          </Typography>
        </Link>
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          {pages.map(({ title, href }) => (
            <Link href={href} key={title} style={{ padding: "0 1rem" }}>
              <Button
                sx={
                  router.pathname == href
                    ? { my: 2, color: "#f50057", display: "block" }
                    : router.pathname == "/"
                    ? { my: 2, color: "black", display: "block" }
                    : { my: 2, color: "white", display: "block" }
                }
              >
                {title}
              </Button>
            </Link>
          ))}
        </Box>

        <IconButton
          onClick={() => setIsMenuOpen(true)}
          sx={{ color: "black", display: { xs: "flex", md: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <Drawer
          open={isMenuOpen}
          onClose={() => setIsMenuOpen(false)}
          PaperProps={{
            sx: {
              width: "60%",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              padding: "20vh 0 35vh 0",
            },
          }}
        >
          {pages.map(({ title, href }) => (
            <Link key={title} href={href} onClick={() => setIsMenuOpen(false)}>
              <Button
                sx={
                  router.pathname == href
                    ? { my: 2, color: "#f50057", display: "block" }
                    : { my: 2, color: "black", display: "block" }
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
