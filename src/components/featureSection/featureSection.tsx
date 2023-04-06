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
        Seamless Car Buying Experience
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
          <Typography variant="h4">Choosing Your Car</Typography>
          <Typography variant="body1" sx={{ color: "#706f7b" }}>
            Browse through our extensive collection of cars and find the perfect
            one that suits your needs and style.
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
          <Typography variant="h4">Get in Touch</Typography>
          <Typography variant="body1" sx={{ color: "#706f7b" }}>
            Contact us and let our team of experts help you with any queries you
            may have regarding the car you’ve chosen.
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
          <Typography variant="h4">Signing the Contract</Typography>
          <Typography variant="body1" sx={{ color: "#706f7b" }}>
            Finalize your purchase by signing the agreement and enjoy the
            experience of owning your dream car.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}
