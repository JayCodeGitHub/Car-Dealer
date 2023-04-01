import {
  Box,
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

const FooterItems = [
  {
    title: "Contact us:",
    list: ["Email: example@example.com", "Phone: +1234567890"],
  },
  {
    title: "Hours of operation:",
    list: ["Sunday: 10am-3pm", "Saturday: 10am-6pm", "Monday-Friday: 8am-6pm"],
  },
  {
    title: "Our branches",
    list: ["Berlin: Germany", "Paris: France", "Madrid: Spain", "Rome: Italy"],
  },
];

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
          {FooterItems.map(({ title, list }) => (
            <Box
              sx={{ width: "20rem", paddingTop: { xs: "2rem", md: "0" } }}
              key={title}
            >
              <Typography>{title}</Typography>
              <List>
                {list.map((item) => (
                  <ListItem key={item}>
                    <ListItemText primary={item} />
                  </ListItem>
                ))}
              </List>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
