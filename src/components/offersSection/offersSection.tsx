import Link from "next/link";
import {
  Container,
  Typography,
  Grid,
  Box,
  CardMedia,
  Button,
} from "@mui/material";
import { offersSectionItems } from "@/assets/items/offersSectionItems";
import { offersSectionStyles } from "./offersSection.styles";

export default function OffersSection() {
  return (
    <Container maxWidth="xl" sx={offersSectionStyles.wrapper}>
      <Typography variant="h3" sx={offersSectionStyles.title}>
        Check out our offer
      </Typography>
      <Grid
        container
        spacing={{ xs: 5, md: 15 }}
        columns={{ xs: 1, md: 8, lg: 12 }}
      >
        {offersSectionItems.map(({ title, price, type, drive, img }) => (
          <Grid item xs={2} sm={4} md={4} key={title}>
            <Box sx={offersSectionStyles.itemWrapper}>
              <CardMedia
                component="img"
                sx={offersSectionStyles.img}
                image={img}
                alt="Image of Car"
              />
              <Typography variant="h3" sx={offersSectionStyles.itemTitle}>
                {title}
              </Typography>
              <Typography variant="h4" sx={offersSectionStyles.price}>
                Price: {price}
              </Typography>
              <Typography variant="h5" sx={offersSectionStyles.type}>
                Type: {type}
              </Typography>
              <Typography variant="h5" sx={offersSectionStyles.drive}>
                Drive: {drive}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
      <Box sx={offersSectionStyles.buttonWrapper}>
        <Link href="/offer">
          <Button sx={offersSectionStyles.button}>See Offer</Button>
        </Link>
      </Box>
    </Container>
  );
}
