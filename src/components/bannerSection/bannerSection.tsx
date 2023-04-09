import { Box, Typography } from "@mui/material";
import { bannerSectionStyles } from "./bannerSection.styles";

export default function BannerSection() {
  return (
    <Box component="section" sx={bannerSectionStyles.wrapper}>
      <Box sx={bannerSectionStyles.background} />
      <Box component="header" sx={bannerSectionStyles.header}>
        <Typography variant="h2" sx={bannerSectionStyles.title}>
          Book a car by getting in touch with us
        </Typography>
      </Box>
    </Box>
  );
}
