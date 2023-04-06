import { Container, Box, Typography } from "@mui/material";
import { BsFillCarFrontFill } from "react-icons/bs";
import { BsPeopleFill } from "react-icons/bs";
import { FaFileSignature } from "react-icons/fa";

export default function FeatureSection() {
  return (
    <Container
      component="section"
      maxWidth="xl"
      sx={{
        display: "flex",
        margin: { xs: "0 0 4rem 0", lg: "8rem 0" },
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        gap: { xs: "2rem", lg: "4rem" },
        padding: "0",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontSize: { xs: "1.8rem", lg: "2rem", xl: "2.5rem" },
          padding: { xs: "2rem 0", md: "0" },
          fontWeight: "700",
        }}
      >
        Quick & easy car rental
      </Typography>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: "5rem", md: "0" },
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", md: "25%" },
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-around",
            gap: "1rem",
          }}
        >
          <Box sx={{ color: "#f50057", fontSize: "6rem" }}>
            <BsFillCarFrontFill />
          </Box>
          <Typography variant="h4">Select Car</Typography>
          <Typography variant="body1" sx={{ color: "#706f7b" }}>
            We offers a big range of vehicles for all your driving needs. We
            have the perfect car to meet your needs
          </Typography>
        </Box>
        <Box
          sx={{
            width: { xs: "90%", md: "25%" },
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-around",
            gap: "1rem",
          }}
        >
          <Box sx={{ color: "#f50057", fontSize: "6rem" }}>
            <BsPeopleFill />
          </Box>
          <Typography variant="h4">Contact Operator</Typography>
          <Typography variant="body1" sx={{ color: "#706f7b" }}>
            Our knowledgeable and friendly operators are always ready to help
            with any questions or concerns
          </Typography>
        </Box>
        <Box
          sx={{
            width: { xs: "90%", md: "25%" },
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-around",
            gap: "1rem",
          }}
        >
          <Box sx={{ color: "#f50057", fontSize: "6rem" }}>
            <FaFileSignature />
          </Box>
          <Typography variant="h4">Lets Drive</Typography>
          <Typography variant="body1" sx={{ color: "#706f7b" }}>
            Whether youre hitting the open road, weve got you covered with our
            wide range of cars
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}
