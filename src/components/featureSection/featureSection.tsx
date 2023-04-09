import { Container, Box, Typography } from "@mui/material";
import { FeatureSectionItems } from "@/assets/items/featureSectionItems";
import { featureSectionStyles } from "./featureSection.styles";

export default function FeatureSection() {
  return (
    <Container component="section" maxWidth="xl">
      <Container
        component="div"
        maxWidth="xl"
        sx={featureSectionStyles.wrapper}
      >
        <Typography variant="h3" sx={featureSectionStyles.title}>
          {FeatureSectionItems.title}
        </Typography>
        <Box sx={featureSectionStyles.stepsWrapper}>
          {FeatureSectionItems.steps.map(({ icon, title, description }) => (
            <Box key={title} sx={featureSectionStyles.step}>
              <Box sx={featureSectionStyles.iconWrapper}>{icon}</Box>
              <Typography variant="h4">{title}</Typography>
              <Typography variant="body1" sx={featureSectionStyles.description}>
                {description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Container>
  );
}
