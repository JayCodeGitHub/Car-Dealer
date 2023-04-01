import {
  Box,
  Button,
  Container,
  Typography,
  Card,
  CardMedia,
} from "@mui/material";

export default function Hero() {
  return (
    <Box>
      <Container maxWidth="xl">
        <header>
          <Box sx={{ display: "flex", paddingTop: "100px" }}>
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
                Find Your Dream Car Today Browse Our Selection!
              </Typography>
              <Typography
                variant="body1"
                sx={{ mt: 3, padding: "1rem", fontSize: "1.1rem" }}
              >
                At our dealership, we offer the best selection of high-quality
                cars, trucks, and SUVs at competitive prices. With a team of
                knowledgeable and friendly sales professionals, we make it easy
                to find your dream car. Plus, our financing options and expert
                service department ensure a hassle-free ownership experience.
                Visit us today and experience the difference!
              </Typography>
              <Box
                sx={{
                  width: "60%",
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
                  See Offer
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
                  Contact Us
                </Button>
              </Box>
            </Box>
            <Box sx={{ width: "50%", display: { xs: "none", md: "flex" } }}>
              <CardMedia
                component="img"
                sx={{ width: "100%" }}
                image="./car.png"
                alt="Alt"
              />
            </Box>
          </Box>
        </header>
      </Container>
    </Box>
  );
}
