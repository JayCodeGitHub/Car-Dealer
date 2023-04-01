import { Box, Button, Container, Typography } from "@mui/material";

export default function Hero() {
  return (
    <Box
      sx={{
        height: "500px",
      }}
    >
      <Container maxWidth="md">
        <Box sx={{ paddingTop: "200px", textAlign: "center" }}>
          <Typography variant="h2" sx={{ fontWeight: "bold" }}>
            Nagłówek
          </Typography>
          <Typography variant="body1" sx={{ mt: 3 }}>
            Opis sekcji
          </Typography>
          <Button variant="contained" sx={{ mt: 3 }}>
            Przycisk
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
