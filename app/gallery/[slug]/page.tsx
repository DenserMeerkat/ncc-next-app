import fs from "fs";
import { gallery } from "@/resources/gallery";

export const generateStaticParams = async () => {
  return gallery.map((item) => ({
    slug: item.slug,
  }));
};

const GalleryPage = (props: any) => {
  const slug = props.params.slug;
  return (
    <div className="h-screen">
      <h1>{slug}</h1>
    </div>
  );
};

export default GalleryPage;
