"use client";
import React, { useState } from "react";
import SectionHeading from "../common/SectionHeading";
import { Focus, Album } from "lucide-react";
import { gallery } from "@/resources/gallery";
import Image from "next/legacy/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Link from "next/link";

const GalleryCards = () => {
  const firstBatch = "/images/wallpapers/first_batch.jpg";
  return (
    <div className="bg-slate-100 dark:bg-slate-900/[0.7] relative h-max py-12 pt-4">
      <div className=" max-w-5xl mx-auto">
        <div className="max-w-2xl mb-8 mx-auto p-2 border-2 rounded-md">
          <AspectRatio ratio={1255 / 994} className="relative">
            <Image
              className="rounded-sm"
              src={firstBatch}
              width={1255}
              height={994}
              blurDataURL={firstBatch.replace("images", "min_images")}
              placeholder="blur"
              layout="intrinsic"
              alt="1st bath of NCC Cadets"
            />
          </AspectRatio>
        </div>
        <SectionHeading
          className="mb-6"
          icon={Focus}
          title="Through the Lens"
        />
        <div className="grid grid-cols-2 sm:grid-cols-3">
          {gallery.map((item) => (
            <GalleryThumb
              key={item.id}
              title={item.title}
              thumb={item.thumb}
              alt={item.alt}
              slug={item.slug}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryCards;

const GalleryThumb = (props: any) => {
  const [isHovered, setIsHovered] = useState(false);
  const id = props.id;
  const title = props.title;
  const thumb = props.thumb;
  const alt = props.alt;
  const slug = props.slug;
  const blurDataURL = thumb.replace("images", "min_images");
  return (
    <Link
      href={`/gallery/${slug}`}
      key={id}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
    relative m-1 sm:m-1.5 md:m-2 lg:m-3 border-2 rounded-md overflow-hidden
    bg-rose-200/[0.7] dark:bg-slate-800/[0.7] border-rose-300 select-none
    drop-shadow-sm hover:drop-shadow-xl hover:cursor-pointer hover:border-rose-500 
    dark:border-slate-200/[0.2] dark:hover:border-rose-400/[0.7]
     hover:scale-[1.02] md:hover:scale-[1.03] transition`}
    >
      <AspectRatio className="relative" ratio={16 / 9}>
        <Image
          src={thumb}
          layout="fill"
          alt={alt}
          blurDataURL={blurDataURL}
          placeholder="blur"
          className="opacity-80"
        />
        <div
          className={`absolute w-full h-full bg-black/[0.4] dark:bg-black/[0.6] backdrop-blur-sm scale-105`}
        ></div>
      </AspectRatio>
      <div className="top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute flex items-center">
        <h3
          className={`text-center max-[330px]:text-sm text-base min-[400px]:text-xl md:text-2xl lg:text-[1.65rem] font-bold tracking-wider drop-shadow-md ${
            isHovered ? "text-rose-400" : "text-slate-50 dark:text-slate-200"
          } transition-colors`}
        >
          {title}
        </h3>
      </div>
    </Link>
  );
};
