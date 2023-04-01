import Hero from "@/components/hero/hero";
import { mainPageItems } from "@/components/assets/items/mainPageItems";

export default function Home() {
  const { title, description, button, secondButton, img } =
    mainPageItems.heroItems;
  return (
    <main>
      <Hero
        title={title}
        description={description}
        button={button}
        secondButton={secondButton}
        img={img}
      />
    </main>
  );
}
