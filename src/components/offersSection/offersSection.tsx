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

export default function OffersSection() {
  return (
    <Container
      maxWidth="xl"
      sx={{
        padding: { xs: "2rem ", md: "5rem 2rem" },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "4rem",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontSize: { xs: "1.8rem", lg: "2rem", xl: "2.5rem" },
          padding: { xs: "2rem 0", md: "0" },
          fontWeight: "700",
        }}
      >
        Check out our offer
      </Typography>
      <Grid
        container
        spacing={{ xs: 5, md: 15 }}
        columns={{ xs: 1, md: 8, lg: 12 }}
      >
        {offersSectionItems.map(({ title, price, type, drive, img }) => (
          <Grid item xs={2} sm={4} md={4} key={title}>
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
            </Box>
          </Grid>
        ))}
      </Grid>
      <Box
        sx={{ alignSelf: "center", width: { xs: "50%", md: "40%", lg: "20%" } }}
      >
        <Link href="/offer">
          <Button
            sx={{
              mt: 3,
              width: "100%",
              backgroundColor: "#f50057",
              border: "solid transparent 2px",
              color: "white",
              fontSize: "1rem",
              "&:hover": {
                border: "solid #f50057 2px",
                color: "black",
                backgroundColor: "transparent",
              },
            }}
          >
            See More
          </Button>
        </Link>
      </Box>
    </Container>
  );
}
