import Link from "next/link";
import { Box, Button, Container, Typography, CardMedia } from "@mui/material";
import { heroStyles } from "./hero.styles";
import { secondaryHeroStyles } from "./hero.styles";

interface HeroProps {
  primary?: boolean;
  title: string;
  description?: string;
  button?: string;
  buttonHref?: string;
  secondButton?: string;
  secondButtonHref?: string;
  img?: string;
}

export default function Hero({
  primary,
  title,
  description,
  button,
  buttonHref,
  secondButton,
  secondButtonHref,
  img,
}: HeroProps) {
  return (
    <>
      <header>
        {primary ? (
          <Box>
            <Container maxWidth="xl">
              <Box sx={heroStyles.wrapper}>
                <Box component="header" sx={heroStyles.header}>
                  <Typography variant="h2" sx={heroStyles.title}>
                    {title}
                  </Typography>
                  <Typography variant="body1" sx={heroStyles.description}>
                    {description}
                  </Typography>
                  <Box sx={heroStyles.buttonsWrapper}>
                    {buttonHref ? (
                      <Link href={buttonHref}>
                        <Button variant="contained" sx={heroStyles.button}>
                          {button}
                        </Button>
                      </Link>
                    ) : null}
                    {secondButtonHref ? (
                      <Link href={secondButtonHref}>
                        <Button
                          variant="contained"
                          sx={heroStyles.secondButton}
                        >
                          {secondButton}
                        </Button>
                      </Link>
                    ) : null}
                  </Box>
                </Box>
                <Box sx={heroStyles.imageWrapper}>
                  <CardMedia
                    component="img"
                    sx={{ width: "100%" }}
                    image={img}
                    alt="Alt"
                  />
                </Box>
              </Box>
            </Container>
          </Box>
        ) : (
          <Box sx={secondaryHeroStyles.wrapper}>
            <Box sx={secondaryHeroStyles.imageWrapper} />
            <Box component="header" sx={secondaryHeroStyles.header}>
              <Typography variant="h2" sx={secondaryHeroStyles.title}>
                {title}
              </Typography>
            </Box>
          </Box>
        )}
      </header>
    </>
  );
}
