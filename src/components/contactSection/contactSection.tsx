import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";
import { contactSectionStyles } from "./contactSection.styles";
import { contactSectionItems } from "@/assets/items/contactSectionItems";

export default function ContactSection() {
  return (
    <>
      <Box component="section" sx={contactSectionStyles.wrapper}>
        <Typography variant="h3">{contactSectionItems.title}</Typography>
        <Typography variant="body1">
          {contactSectionItems.description}
        </Typography>
        <List>
          <ListItem>
            <a href={contactSectionItems.emailHref}>
              <ListItemText
                primary={contactSectionItems.email}
                sx={contactSectionStyles.listItem}
              />
            </a>
          </ListItem>
          <ListItem>
            <a href={contactSectionItems.telHref}>
              <ListItemText
                primary={contactSectionItems.tel}
                sx={contactSectionStyles.listItem}
              />
            </a>
          </ListItem>
        </List>
      </Box>
    </>
  );
}
