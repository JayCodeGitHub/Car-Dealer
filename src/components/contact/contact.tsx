import { Box } from "@mui/material";

export default function ContactSection() {
  return (
    <>
      <Box
        sx={{
          width: { xs: "100%", md: "50%" },
          height: "35rem",
          padding: "2rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
        }}
      >
        <h1>Contact</h1>
      </Box>
    </>
  );
}
