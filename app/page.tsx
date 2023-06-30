import HeroCarousel from "@/components/Home/Carousel";
import HeroHead from "@/components/Home/HeroHead";

export default function Home() {
  return (
    <main>
      <div className="h-fit">
        <HeroHead />
        <HeroCarousel />
      </div>
    </main>
  );
}
