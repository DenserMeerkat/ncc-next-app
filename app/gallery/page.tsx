import GalleryPosters from "@/components/Gallery/GalleryPosters";
import GalleryCards from "@/components/Gallery/GalleryCards";
import RouteChange from "@/components/common/RouteChange";

export default function Gallery() {
  return (
    <main>
      <div className="h-fit">
        <RouteChange />
        <GalleryCards />
        <GalleryPosters />
      </div>
    </main>
  );
}
