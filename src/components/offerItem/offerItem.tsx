import { Typography, Grid, Box, CardMedia, Button } from "@mui/material";
import { offerItemStyles } from "./offerItem.styles";

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
      <Box sx={offerItemStyles.wrapper}>
        <CardMedia
          component="img"
          sx={offerItemStyles.img}
          image={img}
          alt="Image of Car"
        />
        <Typography variant="h3" sx={offerItemStyles.title}>
          {title}
        </Typography>
        <Typography variant="h4" sx={offerItemStyles.price}>
          Price: {price}
        </Typography>
        <Typography variant="h5" sx={offerItemStyles.type}>
          Type: {type}
        </Typography>
        <Typography variant="h5" sx={offerItemStyles.drive}>
          Drive: {drive}
        </Typography>
        <Button variant="contained" sx={offerItemStyles.button}>
          Order Now
        </Button>
      </Box>
    </Grid>
  );
}
