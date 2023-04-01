import { Box, Button, Container, Typography, CardMedia } from "@mui/material";

interface HeroProps {
  title: string;
  description: string;
  button: string;
  secondButton: string;
  img: string;
}

export default function Hero({
  title,
  description,
  button,
  secondButton,
  img,
}: HeroProps) {
  return (
    <Box>
      <Container maxWidth="xl">
        <header>
          <Box
            sx={{ display: "flex", paddingTop: "5rem", paddingBottom: "5rem" }}
          >
            <Box
              sx={{
                width: { xs: "100%", md: "50%" },
                paddingTop: { xs: "5rem", md: "0" },
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontWeight: "bold",
                  fontSize: "2.5rem",
                  textAlign: "center",
                }}
              >
                {title}
              </Typography>
              <Typography
                variant="body1"
                sx={{ mt: 3, padding: "1rem", fontSize: "1.1rem" }}
              >
                {description}
              </Typography>
              <Box
                sx={{
                  width: { xs: "80%", md: "60%" },
                  display: "flex",
                  justifyContent: "space-around",
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    mt: 3,
                    backgroundColor: "#f50057",
                    border: "solid transparent 2px",
                    "&:hover": {
                      border: "solid #f50057 2px",
                      color: "black",
                      backgroundColor: "transparent",
                    },
                  }}
                >
                  {button}
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    mt: 3,
                    backgroundColor: "transparent",
                    color: "black",
                    border: "solid #f50057 2px",
                    "&:hover": {
                      backgroundColor: "#f50057",
                      color: "white",
                    },
                  }}
                >
                  {secondButton}
                </Button>
              </Box>
            </Box>
            <Box sx={{ width: "50%", display: { xs: "none", md: "flex" } }}>
              <CardMedia
                component="img"
                sx={{ width: "100%" }}
                image={img}
                alt="Alt"
              />
            </Box>
          </Box>
        </header>
      </Container>
    </Box>
  );
}
