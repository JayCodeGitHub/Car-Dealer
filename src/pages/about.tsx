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
    img: "./dealership.jpeg",
    title: "Network of Showrooms Across Europe",
    description:
      "Experience luxury car buying in our high-end showrooms. Our top-notch service offers complimentary test drives and expert advice. Find our dealerships in major cities across Europe for an unforgettable in-store experience.",
    alt: "Image of Out dealership",
  };
  return (
    <main>
      <Hero title="About" />
      <Container maxWidth="xl">
        <InfoSection
          secondary
          title={DealershipsSectionItems.title}
          description={DealershipsSectionItems.description}
          img={DealershipsSectionItems.img}
          alt={DealershipsSectionItems.alt}
        />
        <FeatureSection />
        <InfoSection
          title={TeamSectionItems.title}
          description={TeamSectionItems.description}
          img={TeamSectionItems.img}
          alt={TeamSectionItems.alt}
        />
      </Container>
    </main>
  );
}
