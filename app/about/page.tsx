import AboutVideo from "@/components/About/AboutVideo";
import AboutHead from "@/components/About/AboutHead";
import AboutCamp from "@/components/About/AboutCamp";

export default function About() {
  return (
    <main>
      <div className="h-fit">
        <AboutVideo />
        <AboutHead />
        <AboutCamp />
      </div>
    </main>
  );
}
