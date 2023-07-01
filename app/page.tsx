import HomeCarousel from "@/components/Home/Carousel";
import Hero from "@/components/Home/Hero";

export default function Home() {
  return (
    <main>
      <div className="h-fit">
        <Hero />
        <HomeCarousel />
      </div>
    </main>
  );
}
