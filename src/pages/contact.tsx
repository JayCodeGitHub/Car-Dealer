import Hero from "@/components/hero/hero";
import { Container, Typography } from "@mui/material";
import Form from "@/components/form/form";
import ContactSection from "@/components/contactSection/contactSection";

export default function Contact() {
  return (
    <main>
      <Hero title="Contact" />
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          padding: "4rem 0",
        }}
      >
        <ContactSection />
        <Form />
      </Container>
    </main>
  );
}
