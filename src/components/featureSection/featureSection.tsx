import { Container } from "@mui/material";

interface FeatureSectionProps {
  secondary?: boolean;
}

export default function FeatureSection({ secondary }: FeatureSectionProps) {
  return (
    <Container component="section" maxWidth="xl">
      <h1>Feature Section</h1>
    </Container>
  );
}
