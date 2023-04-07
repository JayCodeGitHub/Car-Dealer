import {
  Box,
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { footerItems } from "../../assets/items/footerItems";
import { footerStyles } from "./footer.styles";

export default function Footer() {
  return (
    <Box component="footer" sx={footerStyles.outerWrapper}>
      <Container maxWidth="xl">
        <Box sx={footerStyles.wrapper}>
          <Box sx={footerStyles.infoWrapper}>
            <Typography>Contact us:</Typography>
            <List>
              <ListItem>
                <a href="mailto:example@example.com">
                  <ListItemText
                    primary="Email: example@example.com"
                    sx={{
                      "&:hover": {
                        color: "#f50057",
                      },
                    }}
                  />
                </a>
              </ListItem>
              <ListItem>
                <a href="tel:+1234567890">
                  <ListItemText
                    primary="Phone: +1234567890"
                    sx={{
                      "&:hover": {
                        color: "#f50057",
                      },
                    }}
                  />
                </a>
              </ListItem>
            </List>
          </Box>
          {footerItems.map(({ title, list }) => (
            <Box sx={footerStyles.infoWrapper} key={title}>
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
