import Hero from "@/components/hero/hero";
import { Container, Typography } from "@mui/material";
import InfoSection from "@/components/infoSection/infoSection";
import FeatureSection from "@/components/featureSection/featureSection";

export default function About() {
  return (
    <main>
      <Hero title="About" />
      <Container maxWidth="xl">
        <InfoSection />
        <FeatureSection />
        <InfoSection secondary />
      </Container>
    </main>
  );
}
