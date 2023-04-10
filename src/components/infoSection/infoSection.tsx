import Link from "next/link";
import { Container, CardMedia, Typography, Box, Button } from "@mui/material";
import { infoSectionStyles } from "./infoSection.styles";

interface InfoSectionProps {
  secondary?: boolean;
  img: string;
  title: string;
  description: string;
  alt: string;
  button?: string;
  buttonHref?: string;
}

export default function InfoSection({
  secondary,
  img,
  title,
  description,
  alt,
  button,
  buttonHref,
}: InfoSectionProps) {
  return (
    <Container component="section" maxWidth="xl">
      <Container
        component="div"
        maxWidth="xl"
        sx={
          secondary
            ? infoSectionStyles.wrapper
            : infoSectionStyles.wrapperSecondary
        }
      >
        <CardMedia
          component="img"
          sx={infoSectionStyles.img}
          image={img}
          alt={alt}
        />
        <Box sx={infoSectionStyles.textWrapper}>
          <Typography variant="h3" sx={infoSectionStyles.title}>
            {title}
          </Typography>
          <Typography variant="body1" sx={infoSectionStyles.description}>
            {description}
          </Typography>
          {button && buttonHref ? (
            <Box sx={{ alignSelf: "center" }}>
              <Link href={buttonHref}>
                <Button sx={infoSectionStyles.button}>{button}</Button>
              </Link>
            </Box>
          ) : null}
        </Box>
      </Container>
    </Container>
  );
}
