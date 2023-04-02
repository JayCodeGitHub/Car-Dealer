import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";

export default function ContactSection() {
  return (
    <>
      <Box
        sx={{
          width: { xs: "100%", md: "50%" },
          height: "35rem",
          padding: { xs: "2rem 2rem 4rem 2rem", md: "2rem 2rem 10rem 2rem" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
        }}
      >
        <Typography variant="h3">Feel free to contact us!</Typography>
        <Typography variant="body1">
          At our dealership, we pride ourselves on providing top-notch customer
          service. If you have any questions or concerns, please don&apos;t
          hesitate to reach out to us. We offer various ways to contact us,
          whether it&apos;s by phone, email, or filling out the contact form on
          our website. Our team is dedicated to ensuring your satisfaction and
          providing the highest level of service. Contact us today and
          experience our exceptional service firsthand.
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="Email: example@example.com" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Phone: +1234567890" />
          </ListItem>
        </List>
      </Box>
    </>
  );
}
