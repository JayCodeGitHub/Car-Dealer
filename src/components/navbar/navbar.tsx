import React, { useState } from "react";
import { useRouter } from "next/router";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import Link from "next/link";
import { pages } from "../assets/items/navbarItems";
import { Drawer } from "@mui/material";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  return (
    <Container
      component="nav"
      maxWidth="xl"
      sx={{ padding: { xs: "0 1rem", md: "0 5rem" } }}
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
            LOGO
          </Typography>
        </Link>
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          {pages.map(({ title, href }) => (
            <Link href={href} key={title} style={{ padding: "0 1rem" }}>
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
