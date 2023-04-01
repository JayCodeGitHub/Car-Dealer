import Hero from "@/components/hero/hero";
import { mainPageItems } from "@/components/assets/items/mainPageItems";

export default function Home() {
  const {
    title,
    description,
    button,
    buttonHref,
    secondButton,
    secondButtonHref,
    img,
  } = mainPageItems.heroItems;
  return (
    <main>
      <Hero
        primary
        title={title}
        description={description}
        button={button}
        buttonHref={buttonHref}
        secondButton={secondButton}
        secondButtonHref={secondButtonHref}
        img={img}
      />
    </main>
  );
}
