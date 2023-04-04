import Hero from "@/components/hero/hero";
import {
  Container,
  Typography,
  Grid,
  Box,
  CardMedia,
  Button,
} from "@mui/material";

export default function Offer() {
  const offers = [
    {
      title: "Ferrari 458 Italy",
    },
    {
      title: "Hours of operation:",
    },
    {
      title: "Our branches",
    },
    {
      title: "Our branches",
    },
    {
      title: "Our branches",
    },
    {
      title: "Our branches",
    },
    {
      title: "Our branches",
    },
    {
      title: "Our branches",
    },
  ];
  return (
    <main>
      <Hero title="Offer" />
      <Container
        maxWidth="xl"
        sx={{
          padding: { xs: "2rem ", md: "2rem 0" },
        }}
      >
        <Grid
          container
          spacing={{ xs: 5, md: 15 }}
          columns={{ xs: 1, sm: 8, md: 12 }}
        >
          {offers.map(({ title }) => (
            <Grid item xs={2} sm={4} md={4} key={title}>
              <Box
                sx={{
                  width: "100%",
                  height: "30rem",
                  borderRadius: "0.5rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-around",
                  alignItems: "flex-start",
                  padding: "4%",
                  boxShadow: "0px 8px 16px 0px rgb(0 0 0 / 3%)",
                  backgroundColor: "#f1f1f3",
                }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    height: "40%",
                    objectFit: "cover",
                    borderRadius: "0.5rem",
                    overflow: "hidden",
                  }}
                  image="./Ferrari.jpg"
                  alt="Image of Car"
                />
                <Typography
                  variant="h3"
                  sx={{ fontSize: "2rem", marginLeft: "1rem" }}
                >
                  {title}
                </Typography>
                <Typography variant="h4" sx={{ fontSize: "1.5rem" }}>
                  Price: 60000
                </Typography>
                <Typography variant="h5" sx={{ fontSize: "1.2rem" }}>
                  Type: Manual
                </Typography>
                <Typography variant="h5" sx={{ fontSize: "1.2rem" }}>
                  Drive: Diesel
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    mt: 3,
                    alignSelf: "center",
                    backgroundColor: "#f50057",
                    border: "solid transparent 2px",
                    "&:hover": {
                      border: "solid #f50057 2px",
                      color: "black",
                      backgroundColor: "transparent",
                    },
                  }}
                >
                  Order Now
                </Button>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </main>
  );
}
