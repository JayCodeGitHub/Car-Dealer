import {
  Box,
  Container,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#181A1B",
        color: "white",
        borderTop: "solid #f50057 2px",
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            padding: "2rem 0",
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Box sx={{ width: "20rem", paddingTop: { xs: "2rem", md: "0" } }}>
            <Typography>Contact us:</Typography>
            <List>
              <ListItem>
                <ListItemText primary="Email: example@example.com" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Phone: +1234567890" />
              </ListItem>
            </List>
          </Box>
          <Box sx={{ width: "20rem", paddingTop: { xs: "2rem", md: "0" } }}>
            <Typography>Hours of operation:</Typography>
            <List>
              <ListItem>
                <ListItemText primary="Sunday: 10am-3pm" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Saturday: 10am-6pm" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Monday-Friday: 8am-6pm" />
              </ListItem>
            </List>
          </Box>
          <Box sx={{ width: "20rem", paddingTop: { xs: "2rem", md: "0" } }}>
            <Typography>Our branches</Typography>
            <List>
              <ListItem>
                <ListItemText primary="Berlin: Germany" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Paris: France" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Madrid: Spain" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Rome: Italy" />
              </ListItem>
            </List>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
