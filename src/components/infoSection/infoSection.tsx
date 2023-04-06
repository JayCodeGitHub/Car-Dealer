import { Container, CardMedia, Typography, Box } from "@mui/material";

interface InfoSectionProps {
  secondary?: boolean;
  img: string;
  title: string;
  description: string;
  alt: string;
}

export default function InfoSection({
  secondary,
  img,
  title,
  description,
  alt,
}: InfoSectionProps) {
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
        image={img}
        alt={alt}
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
          {title}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: "1.2rem", lg: "1.3rem", xl: "1.4rem" },
            color: "#706f7b",
          }}
        >
          {description}
        </Typography>
      </Box>
    </Container>
  );
}
