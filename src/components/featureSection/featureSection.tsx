import { Container, Box, Typography } from "@mui/material";
import { FeatureSectionItems } from "@/assets/items/featureSectionItems";

export default function FeatureSection() {
  return (
    <Container component="section" maxWidth="xl">
      <Container
        component="div"
        maxWidth="xl"
        sx={{
          display: "flex",
          margin: { xs: "0 0 4rem 0", lg: "8rem 0" },
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
          gap: { xs: "2rem", lg: "4rem" },
          padding: "0",
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
          {FeatureSectionItems.title}
        </Typography>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: "5rem", md: "0" },
          }}
        >
          {FeatureSectionItems.steps.map(({ icon, title, description }) => (
            <Box
              key={title}
              sx={{
                width: { xs: "90%", md: "25%" },
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-around",
                gap: "1rem",
              }}
            >
              <Box sx={{ color: "#f50057", fontSize: "6rem" }}>{icon}</Box>
              <Typography variant="h4">{title}</Typography>
              <Typography variant="body1" sx={{ color: "#706f7b" }}>
                {description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Container>
  );
}
