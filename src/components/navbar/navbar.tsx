import { useRouter } from "next/router";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Link from "next/link";

const pages = [
  {
    title: "About Us",
    href: "/about",
  },
  {
    title: "Offer",
    href: "/offer",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export default function NavBar() {
  const router = useRouter();
  return (
    <AppBar position="static" style={{ backgroundColor: "transparent" }}>
      <Container maxWidth="xl" sx={{ padding: { xs: "0", md: "0 5rem" } }}>
        <Toolbar
          disableGutters
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <Link href="/">
            <Typography
              variant="h6"
              noWrap
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontWeight: 700,
                letterSpacing: ".3rem",
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
                      : { my: 2, color: "white", display: "block" }
                  }
                >
                  {title}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
