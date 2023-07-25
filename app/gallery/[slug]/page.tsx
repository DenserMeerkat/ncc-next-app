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
    <div className="h-fit  bg-gray-100/[0.5] dark:bg-slate-900/[0.3]">
      <div className="mx-auto max-w-7xl py-12">
        <h1>{slug}</h1>
      </div>
    </div>
  );
};

export default GalleryPage;
