"use client";
import dynamic from "next/dynamic";
import TooltipElement from "../common/TooltipElement";
import { Pause, Play, StepForward, StepBack } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useMediaQuery } from "@mui/material";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const Hero = () => {
  const nccWallpaper = "/images/ncc_wallpaper.jpg";
  return (
    <div className="max-w-6xl mx-auto  mt-10 mb-10">
      <div className="p-0 md:p-2  ">
        <div className="md:rounded-md border border-gray-400 dark:border-slate-700">
          <MultiCarousel
            images={[
              nccWallpaper,
              nccWallpaper,
              nccWallpaper,
              nccWallpaper,
              nccWallpaper,
            ]}
          />
        </div>
      </div>
    </div>
  );
};

const MultiCarousel = (props: any) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const imgTail =
    "relative md:rounded-sm overflow-hidden object-cover select-none pointer-events-none";
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 2400 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 2400, min: 768 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const images = props.images;
  const [autoplay, setAutoplay] = useState(true);

  const controlTail = `p-1 md:p-2 bg-rose-200/[0.9] dark:bg-slate-700/[0.9] text-gray-700 dark:text-slate-300
    hover:bg-rose-300 dark:hover:bg-slate-600 transition-colors drop-shadow-lg rounded-md`;

  const handleAutoplayClick = () => {
    setAutoplay(autoplay ? false : true);
  };

  return (
    <div className="m:0.5 md:m-1.5 relative">
      {!isMobile && (
        <div
          aria-label="Carousel Controls"
          className=" absolute z-10 rounded-sm
        -bottom-8 left-1/2 transform -translate-x-1/2 md:top-1.5 md:bottom-auto md:left-auto md:right-1.5 md:translate-x-0
  "
        >
          <button
            aria-label="Play/Pause button"
            className={controlTail}
            onClick={handleAutoplayClick}
          >
            {autoplay ? (
              <TooltipElement element={<Pause />} tooltip={"Pause Autoplay"} />
            ) : (
              <TooltipElement element={<Play />} tooltip={"Play Autoplay"} />
            )}
          </button>
        </div>
      )}
      <Carousel
        responsive={responsive}
        partialVisbile={false}
        autoPlay={!isMobile ? autoplay : false}
        ssr
        infinite
        customLeftArrow={<CustomArrow direction="left" />}
        customRightArrow={<CustomArrow direction="right" />}
        removeArrowOnDeviceType={[]}
        className="max-w-6xl md:rounded-md overflow-hidden mx-auto"
      >
        {images.map((image: string, index: number) => (
          <div key={index} className="p-0.5 md:p-0.5">
            <div className={imgTail}>
              <Image
                src={image}
                width={1980}
                height={720}
                alt={image}
                loading="lazy"
                quality={100}
              />
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

const CustomArrow = ({ onClick, direction, ...rest }: any) => {
  const iconTail = `p-1.5 md:p-2.5 bg-rose-200/[0.9] dark:bg-slate-700/[0.9] text-gray-700 dark:text-slate-300 
    hover:bg-rose-300 dark:hover:bg-slate-600 transition-colors drop-shadow-lg`;
  return (
    <button
      onClick={onClick}
      className={`absolute z-10 rounded-md  ${
        direction === "left" ? "left-5" : "right-5"
      } h-fit w-fit 
      top-1/2 transform -translate-y-1/2
      ${iconTail}`}
    >
      {direction === "left" ? (
        <TooltipElement element={<StepBack />} tooltip={"Previous"} />
      ) : (
        <TooltipElement element={<StepForward />} tooltip={"Next"} />
      )}
    </button>
  );
};

export default Hero;
