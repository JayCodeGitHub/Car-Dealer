import Hero from "@/components/hero/hero";
import InfoSection from "@/components/infoSection/infoSection";
import FeatureSection from "@/components/featureSection/featureSection";
import {
  DealershipsSectionItems,
  TeamSectionItems,
} from "@/assets/items/aboutPageItems";
import BannerSection from "@/components/bannerSection/bannerSection";

export default function About() {
  return (
    <main>
      <Hero title="About" />
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
      <BannerSection />
    </main>
  );
}
