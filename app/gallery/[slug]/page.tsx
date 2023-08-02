import GalleryPhotos from "@/components/Gallery/GalleryPhotos";
import { gallery } from "@/resources/gallery";
import PhotoGallery from "react-photo-gallery";
import { Photo } from "@/components/utils/interfaces";
import Link from "next/link";
import { ArrowLeftSquare } from "lucide-react";

export const generateStaticParams = async () => {
  return gallery.map((item) => ({
    slug: item.slug,
  }));
};

const GalleryPage = (props: any) => {
  const slug = props.params.slug;
  const galleryItem = gallery.find((item) => item.slug === slug);
  const photos: Photo[] = galleryItem!.photos.map((item) => ({
    src: item.src,
    width: item.width,
    height: item.height,
    alt: item.alt,
  }));
  return (
    <div className="h-fit  bg-gray-100/[0.5] dark:bg-slate-900/[0.3]">
      <div className="mx-auto max-w-7xl py-12 ">
        <div className="sm:hidden flex w-full justify-center">
          <button className="mb-6">
            <Link
              href={"/gallery"}
              className="w-max flex px-1 sm:px-3 items-center rounded-md font-medium
bg-rose-200 dark:bg-slate-800 border border-rose-300 dark:border-slate-700  transition-colors
hover:bg-rose-300 dark:hover:bg-slate-700 hover:border-rose-400 dark:hover:border-slate-600"
            >
              <ArrowLeftSquare className="m-1.5 sm:m-2" />
              <p className="mr-1.5 sm:mr-2 text-sm sm:text-md font-semibold">
                {`Return to Gallery`}
              </p>
            </Link>
          </button>
        </div>
        <div className="flex justify-between px-4">
          <h1 className="mt-4 w-full sm:w-auto sm:mt-0 text-center text-2xl md:text-3xl font-bold mb-8 lg:mb-12">
            {galleryItem!.title}
          </h1>
          <div className="hidden sm:block">
            <button className="mb-6">
              <Link
                href={"/gallery"}
                className="w-max flex px-1 sm:px-3 items-center rounded-md font-medium
bg-rose-200 dark:bg-slate-800 border border-rose-300 dark:border-slate-700  transition-colors
hover:bg-rose-300 dark:hover:bg-slate-700 hover:border-rose-400 dark:hover:border-slate-600"
              >
                <ArrowLeftSquare className="m-1.5 sm:m-2" />
                <p className="mr-1.5 sm:mr-2 text-sm sm:text-md font-semibold">
                  {`Return to Gallery`}
                </p>
              </Link>
            </button>
          </div>
        </div>
        {/* <div
          className="mb-8 border-2 py-2 md:py-3 ml-1 px-3 md:px-4 w-fit rounded-lg 
         bg-rose-100/[0.8] dark:bg-slate-900/[0.7] border-red-200 dark:border-slate-800"
        ></div> */}
        <GalleryPhotos photos={photos} />
      </div>
    </div>
  );
};

export default GalleryPage;
