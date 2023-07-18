import AboutVideo from "@/components/About/AboutVideo";
import AboutHead from "@/components/About/AboutHead";
import AboutCamp from "@/components/About/AboutCamp";
import RouteChange from "@/components/common/RouteChange";

export default function About() {
  return (
    <main>
      <div className="h-fit">
        <RouteChange />
        <AboutVideo />
        <AboutHead />
        <AboutCamp />
      </div>
    </main>
  );
}
