import HomeCarousel from "@/components/Home/HomeCarousel";
import Hero from "@/components/Home/Hero";
import Latest from "@/components/Home/Latest";
import RouteChange from "@/components/common/RouteChange";

export default function Home() {
  return (
    <main>
      <div className="h-fit">
        <RouteChange />
        <Hero />
        <HomeCarousel />
        <Latest />
      </div>
    </main>
  );
}
