import Current from "@/components/Members/Current";
import RouteChange from "@/components/common/RouteChange";

export default function Members() {
  return (
    <main>
      <div className="h-fit">
        <RouteChange />
        <Current />
      </div>
    </main>
  );
}
