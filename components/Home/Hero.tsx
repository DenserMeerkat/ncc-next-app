"use client";
import dynamic from "next/dynamic";
import TooltipElement from "../common/TooltipElement";
import { Pause, Play, StepForward, StepBack } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useMediaQuery } from "@mui/material";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const SplideWithNoSSR = dynamic(() => import("./SplideCarousel.tsx"), {
  ssr: false,
});

export const Hero = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const nccWallpaper = "/images/ncc_wallpaper.jpg";
  const nccShoulder = "/images/ncc_shoulder.png";
  return (
    <div className="max-w-5xl mx-auto  mt-10 mb-10">
      <div className="p-0 md:p-2  ">
        <div className="lg:rounded-md">
          {/* <SplideWithNoSSR
            images={[
              nccWallpaper,
              nccShoulder,
              nccWallpaper,
              nccShoulder,
              nccWallpaper,
            ]}
          /> */}
          <ResponsiveCarousel
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

const ResponsiveCarousel = (props: any) => {
  const images = props.images;
  const length = images.length;
  const [active, setActive] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const thumbTail =
    "w-max m-2 rounded-md border border-gray-300 dark:border-slate-700";
  const thumbTailActive =
    "w-max m-2  rounded-md border border-gray-700  dark:border-slate-400 bg-rose-200 dark:bg-slate-800";
  const controlTail = `p-1 bg-rose-200 dark:bg-slate-700 text-gray-700 dark:text-slate-300
    hover:bg-rose-300 dark:hover:bg-slate-600  transition-colors`;
  const handleCarouselChange = (index: number) => {
    setActive(index);
  };
  const handleAutoplayClick = () => {
    setAutoplay(autoplay ? false : true);
  };
  const handleNextClick = () => {
    setActive((prevActive) => (prevActive < length - 1 ? prevActive + 1 : 0));
  };

  const handlePrevClick = () => {
    setActive((prevActive) => (prevActive > 0 ? prevActive - 1 : length - 1));
  };
  return (
    <div className="flex flex-col gap-12 md:gap-4  mt-8 items-center">
      <div
        id="carousel"
        className="relative p-0 sm:p-1 border 
      md:rounded-lg border-gray-300 dark:border-slate-700"
      >
        <div
          aria-label="Carousel Controls"
          className="flex gap-0.5 absolute z-10 -bottom-8 left-1/2 transform -translate-x-1/2 
            md:bottom-auto md:left-auto md:right-1 md:translate-x-0
        rounded-br-sm md:rounded-br-none md:rounded-tr-sm rounded-bl-sm overflow-hidden"
        >
          <button aria-label="Previous button" className={controlTail}>
            <TooltipElement
              element={<StepBack onClick={handlePrevClick} />}
              tooltip={"Previous"}
            />
          </button>
          <button aria-label="Play/Pause button" className={controlTail}>
            {autoplay ? (
              <TooltipElement
                element={<Pause onClick={handleAutoplayClick} />}
                tooltip={"Pause Autoplay"}
              />
            ) : (
              <TooltipElement
                element={<Play onClick={handleAutoplayClick} />}
                tooltip={"Play Autoplay"}
              />
            )}
          </button>
          <button aria-label="Forward button" className={controlTail}>
            <TooltipElement
              element={<StepForward onClick={handleNextClick} />}
              tooltip={"Next"}
            />
          </button>
        </div>
        <Carousel
          selectedItem={active}
          className="max-w-5xl min-h-[40px] h-max md:rounded-md overflow-hidden bg-rose-200 dark:bg-slate-800"
          autoPlay={autoplay}
          infiniteLoop={true}
          swipeable={true}
          showStatus={false}
          showIndicators={false}
          showArrows={false}
          showThumbs={false}
          stopOnHover={false}
          onChange={handleCarouselChange}
        >
          {images.map((image: string, index: number) => (
            <div key={index}>
              <div>
                <Image
                  className=""
                  src={image}
                  width={1980}
                  height={1080}
                  alt={image}
                  loading="lazy"
                  quality={100}
                />
              </div>
            </div>
          ))}
        </Carousel>
      </div>
      <div className="flex-wrap flex flex-row  select-none ">
        {images.map((image: string, index: number) => (
          <div
            key={index}
            className={active === index ? thumbTailActive : thumbTail}
          >
            {
              <div className="p-0.5 sm:p-1 h-[28px] w-[40px]  sm:h-[44px] sm:w-[74px]">
                <div className="relative flex items-center w-full h-full">
                  <Image
                    key={index}
                    src={image}
                    fill
                    alt={`Thumbnail ${index + 1}`}
                    className="h-14 sm:h-16 rounded-sm object-cover border"
                    onClick={() => {
                      setActive(index);
                    }}
                    quality={5}
                  />
                </div>
              </div>
            }
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
