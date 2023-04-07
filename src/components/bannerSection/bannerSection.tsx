import { Box, Typography } from "@mui/material";

export default function BannerSection() {
  return (
    <Box
      sx={{
        backgroundImage: "url(./bannerCar.jpeg)",
        backgroundSize: "cover",
        backgroundPositionY: "center",
        position: "relative",
        height: { xs: "12rem", md: "15rem" },
      }}
    >
      <Box
        sx={{
          backgroundColor: "rgba(24, 26, 27, 0.92)",
          height: "100%",
          position: "absolute",
          right: "0",
          top: "0",
          width: "100%",
        }}
      />
      <Box
        component="header"
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            mt: 3,
            textAlign: "center",
            fontSize: { xs: "1.4rem", md: "3rem" },
            color: "white",
            margin: "0",
            padding: "0 2rem",
            lineHeight: "1.5",
          }}
        >
          Book a car by getting in touch with us
        </Typography>
      </Box>
    </Box>
  );
}
