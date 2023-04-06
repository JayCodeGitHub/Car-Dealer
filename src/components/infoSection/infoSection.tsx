import { Container, CardMedia, Typography, Box } from "@mui/material";

interface InfoSectionProps {
  secondary?: boolean;
}

export default function InfoSection({ secondary }: InfoSectionProps) {
  return (
    <Container
      component="section"
      maxWidth="xl"
      sx={{
        display: "flex",
        alignItems: "center",
        padding: { xs: "4rem 0", md: "0" },
        justifyContent: "center",
        height: { xs: "auto", md: "35rem" },
        flexDirection: secondary
          ? { xs: "column", md: "row-reverse" }
          : { xs: "column", md: "row" },
        margin: { xs: "0", md: "2rem 0" },
      }}
    >
      <CardMedia
        component="img"
        sx={{
          width: { xs: "100%", md: "50%" },
          borderRadius: "0.5rem",
          overflow: "hidden",
        }}
        image="./team.jpg"
        alt="Image of our team"
      />
      <Box
        sx={{
          width: { xs: "100%", md: "50%" },
          height: { xs: "auto", md: "100%" },
          padding: { xs: "4rem 2rem", md: "5rem" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            marginLeft: "1rem",
            fontSize: { xs: "1.8rem", lg: "2rem", xl: "2.5rem" },
            padding: { xs: "2rem 0", md: "0" },
            fontWeight: "700",
          }}
        >
          Expert Team at Your Service
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: "1.2rem", lg: "1.3rem", xl: "1.4rem" },
            color: "#706f7b",
          }}
        >
          Our team is dedicated to providing personalized customer service and
          helping you find your perfect luxury or sports car. Trust us to guide
          you through the process and arrange financing options that work for
          you. Contact us to schedule a test drive and start your journey
          towards luxury driving.
        </Typography>
      </Box>
    </Container>
  );
}
