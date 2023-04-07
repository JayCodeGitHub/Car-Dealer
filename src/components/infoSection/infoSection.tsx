import Link from "next/link";
import { Container, CardMedia, Typography, Box, Button } from "@mui/material";

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
        sx={{
          display: "flex",
          alignItems: "center",
          padding: { xs: "4rem 0", md: "0" },
          justifyContent: "center",
          height: { xs: "auto", md: "35rem" },
          flexDirection: secondary
            ? { xs: "column", md: "row-reverse" }
            : { xs: "column", md: "row" },
          margin: { xs: "0", md: "2rem 0" },
        }}
      >
        <CardMedia
          component="img"
          sx={{
            width: { xs: "100%", md: "50%" },
            borderRadius: "0.5rem",
            overflow: "hidden",
          }}
          image={img}
          alt={alt}
        />
        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
            height: { xs: "auto", md: "100%" },
            padding: { xs: "4rem 2rem", md: "3rem 5rem" },
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              marginLeft: "1rem",
              fontSize: { xs: "1.8rem", lg: "1.8rem", xl: "2.5rem" },
              padding: { xs: "2rem 0", md: "0" },
              fontWeight: "700",
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "1.2rem", lg: "1.1rem", xl: "1.4rem" },
              color: "#706f7b",
            }}
          >
            {description}
          </Typography>
          {button && buttonHref ? (
            <Box sx={{ alignSelf: "center" }}>
              <Link href={buttonHref}>
                <Button
                  sx={{
                    mt: 3,
                    backgroundColor: "#f50057",
                    border: "solid transparent 2px",
                    color: "white",
                    fontSize: "1rem",
                    "&:hover": {
                      border: "solid #f50057 2px",
                      color: "black",
                      backgroundColor: "transparent",
                    },
                  }}
                >
                  {button}
                </Button>
              </Link>
            </Box>
          ) : null}
        </Box>
      </Container>
    </Container>
  );
}
