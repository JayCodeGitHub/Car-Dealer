import { Typography, Grid, Box, CardMedia, Button } from "@mui/material";

interface OfferItemProps {
  title: string;
  img: string;
  price: string;
  type: string;
  drive: string;
}

export default function OfferItem({
  title,
  img,
  price,
  type,
  drive,
}: OfferItemProps) {
  return (
    <Grid item xs={2} sm={4} md={4}>
      <Box
        sx={{
          width: "100%",
          height: "35rem",
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
        <Typography variant="h3" sx={{ fontSize: "2rem", marginLeft: "1rem" }}>
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
  );
}
