import Leaders from "@/components/Members/Leaders";
import Officers from "@/components/Members/Officers";
import RouteChange from "@/components/common/RouteChange";

export default function Members() {
  return (
    <main>
      <div className="h-fit">
        <RouteChange />
        <Officers />
        <Leaders />
      </div>
    </main>
  );
}
