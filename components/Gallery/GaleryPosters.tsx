"use client";
import React, { useState } from "react";
import SectionHeading from "../common/SectionHeading";
import { Album } from "lucide-react";
import { posters } from "@/resources/posters";
import Image from "next/legacy/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { useMediaQuery } from "@mui/material";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const GalleryPosters = () => {
  const isNonMobile = useMediaQuery("(min-width: 500px)");
  const reversedPosters = posters.slice().reverse();
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
    setIsGalleryOpen(true);
  };

  const handleCloseGallery = () => {
    setIsGalleryOpen(false);
  };

  const galleryImages = reversedPosters.map((item) => ({
    original: item.src,
    thumbnail: item.src,
    originalAlt: "Poster",
  }));

  return (
    <div className="relative h-max py-12">
      <div className="max-w-5xl mx-auto">
        <SectionHeading className="mb-6" icon={Album} title="Posters" />
        <Sheet open={isGalleryOpen} onOpenChange={setIsGalleryOpen}>
          <SheetContent
            side={"top"}
            className="realtive h-fit rounded-md border mx-auto max-w-5xl"
          >
            <SheetHeader className="h-10 sm:h-4 md:h-0"></SheetHeader>
            <ImageGallery
              thumbnailPosition={isNonMobile ? "left" : "bottom"}
              items={galleryImages}
              showFullscreenButton={false}
              showPlayButton={false}
              startIndex={selectedImageIndex}
              lazyLoad={true}
            />
          </SheetContent>
          <div className="grid grid-cols-3 min-[650px]:grid-cols-4 lg:grid-cols-5">
            {reversedPosters.map((item, index) => (
              <SheetTrigger key={item.id} asChild>
                <div
                  key={item.id}
                  className="p-0.5 hover:scale-[101%] hover:p-0 m-0 md:m-0.5 lg:m-1 md:rounded-md overflow-hidden border-2 
                border-gray-400 dark:border-slate-950 bg-rose-100 dark:bg-slate-800 transition-transform"
                  onClick={() => handleImageClick(index)}
                >
                  <AspectRatio ratio={1} className="relative">
                    <Image
                      src={item.src}
                      layout="fill"
                      alt="Poster"
                      blurDataURL={item.src.replace("images", "min_images")}
                      placeholder="blur"
                      className="md:rounded-sm opacity-95 dark:opacity-90"
                    />
                  </AspectRatio>
                </div>
              </SheetTrigger>
            ))}
          </div>
        </Sheet>
      </div>
    </div>
  );
};

export default GalleryPosters;
