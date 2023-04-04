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
      title: "Lamborghini Aventador S",
      price: "$417,650",
      type: "Automatic",
      drive: "Gasoline",
      img: "./offers/aventador.jpeg",
    },
    {
      title: "Ferrari 488 GTB",
      price: "$334,000",
      type: "Automatic",
      drive: "Gasoline",
      img: "./offers/ferrari.jpg",
    },
    {
      title: "Bugatti Chiron",
      price: "$2,990,000",
      type: "Automatic",
      drive: "Gasoline",
      img: "./offers/bugatti.webp",
    },
    {
      title: "Porsche 911 Turbo S",
      price: "$203,500",
      type: "Automatic",
      drive: "Gasoline",
      img: "./offers/porsche.webp",
    },
    {
      title: "Aston Martin DBS Superleggera",
      price: "$308,000",
      type: "Automatic",
      drive: "Gasoline",
      img: "./offers/aston.webp",
    },
    {
      title: "McLaren 720S",
      price: "$299,000",
      type: "Automatic",
      drive: "Gasoline",
      img: "./offers/mclaren.jpg",
    },
    {
      title: "Bentley Continental GT",
      price: "$220,000",
      type: "Automatic",
      drive: "Gasoline",
      img: "./offers/bentley.avif",
    },
    {
      title: "Rolls-Royce Ghost",
      price: "$332,500",
      type: "Automatic",
      drive: "Gasoline",
      img: "./offers/rolls.webp",
    },
    {
      title: "Mercedes-AMG GT R Pro ",
      price: "$199,650",
      type: "Automatic",
      drive: "Gasoline",
      img: "./offers/mercedes.jpeg",
    },
    {
      title: "Audi R8 V10 Plus",
      price: "$197,000",
      type: "Automatic",
      drive: "Gasoline",
      img: "./offers/audi.jpeg",
    },
    {
      title: "BMW M8 Competition",
      price: "$146,000",
      type: "Automatic",
      drive: "Gasoline",
      img: "./offers/bmw.jpeg",
    },
    {
      title: "Lexus LC 500",
      price: "$92,950",
      type: "Automatic",
      drive: "Gasoline",
      img: "./offers/lexus.jpeg",
    },
    {
      title: "Maserati GranTurismo",
      price: "$150,980",
      type: "Automatic",
      drive: "Gasoline",
      img: "./offers/maserati.jpeg",
    },
    {
      title: "Jaguar F-Type SVR",
      price: "$123,600",
      type: "Automatic",
      drive: "Gasoline",
      img: "./offers/jaguar.webp",
    },
    {
      title: "Acura NSX s",
      price: "$157,500",
      type: "Automatic",
      drive: "Gasoline",
      img: "./offers/acura.jpeg",
    },
    {
      title: "Alfa Romeo 4C Spider",
      price: "$73,495",
      type: "Automatic",
      drive: "Gasoline",
      img: "./offers/alfa.jpeg",
    },
    {
      title: "Chevrolet Corvette ZR1",
      price: "$123,000",
      type: "Manual",
      drive: "Gasoline",
      img: "./offers/chevrolet.webp",
    },
    {
      title: "Dodge Viper ACR",
      price: "$120,000",
      type: "Manual",
      drive: "Gasoline",
      img: "./offers/dodge.jpeg",
    },
    {
      title: "Ford GT",
      price: "$500,000",
      type: "Automatic",
      drive: "Gasoline",
      img: "./offers/ford.webp",
    },
    {
      title: "Nissan GT-R Nismo ",
      price: "$210,740",
      type: "Automatic",
      drive: "Gasoline",
      img: "./offers/nissan.jpeg",
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
          {offers.map(({ title, price, type, drive, img }) => (
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
                  image={img}
                  alt="Image of Car"
                />
                <Typography
                  variant="h3"
                  sx={{ fontSize: "2rem", marginLeft: "1rem" }}
                >
                  {title}
                </Typography>
                <Typography variant="h4" sx={{ fontSize: "1.5rem" }}>
                  Price: {price}
                </Typography>
                <Typography variant="h5" sx={{ fontSize: "1.2rem" }}>
                  Type: {type}
                </Typography>
                <Typography variant="h5" sx={{ fontSize: "1.2rem" }}>
                  Drive: {drive}
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
