import {
  Box,
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { footerItems } from "../assets/items/footerItems";
import { footerStyles } from "./footer.styles";

export default function Footer() {
  return (
    <Box component="footer" sx={footerStyles.outerWrapper}>
      <Container maxWidth="xl">
        <Box sx={footerStyles.wrapper}>
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
