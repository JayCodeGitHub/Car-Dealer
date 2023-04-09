import Hero from "@/components/hero/hero";
import { Container, Grid } from "@mui/material";
import { offersItems } from "@/assets/items/offerPageItems";
import OfferItem from "@/components/offerItem/offerItem";
import BannerSection from "@/components/bannerSection/bannerSection";

export default function Offer() {
  return (
    <main>
      <Hero title="Offer" />
      <Container
        maxWidth="xl"
        sx={{
          padding: { xs: "2rem ", md: "2rem" },
        }}
      >
        <Grid
          container
          spacing={{ xs: 5, md: 15 }}
          columns={{ xs: 1, md: 8, lg: 12 }}
        >
          {offersItems.map(({ title, price, type, drive, img }) => (
            <OfferItem
              key={title}
              title={title}
              price={price}
              type={type}
              drive={drive}
              img={img}
            />
          ))}
        </Grid>
      </Container>
      <BannerSection />
    </main>
  );
}
