import Hero from "@/components/hero/hero";
import { Container, Typography } from "@mui/material";
import InfoSection from "@/components/infoSection/infoSection";
import FeatureSection from "@/components/featureSection/featureSection";

export default function About() {
  const TeamSectionItems = {
    img: "./team.jpg",
    title: "Expert Team at Your Service",
    description:
      "Our team is dedicated to providing personalized customer service and helping you find your perfect luxury or sports car. Trust us to guide you through the process and arrange financing options that work for you. Contact us to schedule a test drive and start your journey towards luxury driving.",
    alt: "Image of Out Team",
  };
  const DealershipsSectionItems = {
    img: "./team.jpg",
    title: "Expert Team at Your Service",
    description:
      "Our team is dedicated to providing personalized customer service and helping you find your perfect luxury or sports car. Trust us to guide you through the process and arrange financing options that work for you. Contact us to schedule a test drive and start your journey towards luxury driving.",
    alt: "Image of Out Team",
  };
  return (
    <main>
      <Hero title="About" />
      <Container maxWidth="xl">
        <InfoSection
          title={TeamSectionItems.title}
          description={TeamSectionItems.description}
          img={TeamSectionItems.img}
          alt={TeamSectionItems.alt}
        />
        <FeatureSection />
        <InfoSection
          secondary
          title={DealershipsSectionItems.title}
          description={DealershipsSectionItems.description}
          img={DealershipsSectionItems.img}
          alt={DealershipsSectionItems.alt}
        />
      </Container>
    </main>
  );
}
