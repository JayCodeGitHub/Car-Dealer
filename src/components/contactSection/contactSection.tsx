import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";
import { contactSectionStyles } from "./contactSection.styles";

export default function ContactSection() {
  return (
    <>
      <Box component="section" sx={contactSectionStyles.wrapper}>
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
            <a href="mailto:example@example.com">
              <ListItemText
                primary="Email: example@example.com"
                sx={contactSectionStyles.listItem}
              />
            </a>
          </ListItem>
          <ListItem>
            <a href="tel:+1234567890">
              <ListItemText
                primary="Phone: +1234567890"
                sx={contactSectionStyles.listItem}
              />
            </a>
          </ListItem>
        </List>
      </Box>
    </>
  );
}
