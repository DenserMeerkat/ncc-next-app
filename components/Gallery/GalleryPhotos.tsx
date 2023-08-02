"use client";
import React from "react";
import Image from "next/legacy/image";
import PhotoGallery from "react-photo-gallery";
import { Photo } from "@/components/utils/interfaces";

const GalleryPhotos = (props: any) => {
  const photos = props.photos;
  const reversedPhotos: Photo[] = [...photos].reverse();

  const CustomImageComponent = ({ index, photo, margin, onClick }: any) => {
    return (
      <div key={index} style={{ margin: margin }}>
        <Image
          className="rounded-md overflow-hidden"
          src={photo.src}
          alt={photo.alt}
          height={photo.height}
          width={photo.width}
        />
      </div>
    );
  };

  return (
    <div>
      <PhotoGallery
        photos={reversedPhotos}
        renderImage={CustomImageComponent}
      />
    </div>
  );
};

export default GalleryPhotos;
