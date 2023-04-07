import Hero from "@/components/hero/hero";
import { heroItems, infoSectionItems } from "@/assets/items/mainPageItems";
import FeatureSection from "@/components/featureSection/featureSection";
import InfoSection from "@/components/infoSection/infoSection";
import OffersSection from "@/components/offersSection/offersSection";
import BannerSection from "@/components/bannerSection/bannerSection";

export default function Home() {
  return (
    <main>
      <Hero
        primary
        title={heroItems.title}
        description={heroItems.description}
        button={heroItems.button}
        buttonHref={heroItems.buttonHref}
        secondButton={heroItems.secondButton}
        secondButtonHref={heroItems.secondButtonHref}
        img={heroItems.img}
      />
      <FeatureSection />
      <BannerSection />
      <OffersSection />
      <InfoSection
        title={infoSectionItems.title}
        description={infoSectionItems.description}
        img={infoSectionItems.img}
        alt={infoSectionItems.alt}
        button={infoSectionItems.button}
        buttonHref={infoSectionItems.buttonHref}
      />
    </main>
  );
}
