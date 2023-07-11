"use client";
import TooltipElement from "../common/TooltipElement";
import { Pause, Play, StepForward, StepBack } from "lucide-react";
import { useState } from "react";
import Image from "next/legacy/image";
import { useMediaQuery } from "@mui/material";
import { heroCarousel } from "@/resources/hero";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Quote from "../common/Quote";

const controlTail = `p-1.5 md:p-2.5 bg-sky-300/[0.9] dark:bg-slate-700/[0.95] text-gray-800 dark:text-slate-300 rounded-md
hover:bg-sky-200 dark:hover:bg-slate-600 transition-colors drop-shadow-lg border border-gray-500 dark:border-slate-400`;

export const HomeCarousel = () => {
  return (
    <div className="max-w-6xl mx-auto  mt-10 mb-10">
      <div className="p-0 md:p-2">
        <Quote>
          <span className="text-red-900 dark:text-red-400 font-bold">
            Unite
          </span>
          ,{" "}
          <span className="text-blue-900 dark:text-blue-400 font-bold">
            Train
          </span>
          ,{" "}
          <span className="text-sky-900 dark:text-sky-400 font-bold">Lead</span>
          &nbsp;:&nbsp; The Strength of Our Cadet Family
        </Quote>

        <div className="md:rounded-md border border-gray-400 dark:border-slate-700">
          <MultiCarousel />
        </div>
      </div>
    </div>
  );
};

const MultiCarousel = (props: any) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const imgTail = `relative w-full h-[43vw] min-[1150px]:h-[494px]
    md:rounded-sm overflow-hidden select-none pointer-events-none`;
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
  const [autoplay, setAutoplay] = useState(true);

  const handleAutoplayClick = () => {
    setAutoplay(autoplay ? false : true);
  };

  return (
    <div className="m:0.5 md:m-1.5 relative">
      {!isMobile && (
        <div
          aria-label="Carousel Controls"
          className=" absolute z-10 rounded-sm 
        -bottom-8 left-1/2 transform -translate-x-1/2 md:top-2.5 md:bottom-auto md:left-auto md:right-2.5 md:translate-x-0"
        >
          {autoplay ? (
            <TooltipElement
              element={
                <button
                  aria-label="Play/Pause button"
                  className={`${controlTail}`}
                  onClick={handleAutoplayClick}
                >
                  <Pause />
                </button>
              }
              tooltip={"Pause Autoplay"}
            />
          ) : (
            <TooltipElement
              element={
                <button
                  aria-label="Play/Pause button"
                  className={`${controlTail}`}
                  onClick={handleAutoplayClick}
                >
                  <Play />
                </button>
              }
              tooltip={"Play Autoplay"}
            />
          )}
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
        className="max-w-6xl md:rounded-md overflow-hidden"
      >
        {heroCarousel.map((image: any, index: number) => (
          <div key={index} className="p-0.5 ">
            <div className={imgTail}>
              <Image
                src={image.src}
                layout="fill"
                blurDataURL={image.src.replace("images", "min_images")}
                placeholder="blur"
                alt={image.alt}
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
  const buttonTail = `absolute z-10 rounded-md  ${
    direction === "left" ? "left-2.5" : "right-2.5"
  } h-fit w-fit 
  top-1/2 transform -translate-y-1/2
  ${controlTail}`;
  return (
    <div>
      {direction === "left" ? (
        <TooltipElement
          element={
            <button onClick={onClick} className={buttonTail}>
              <StepBack />
            </button>
          }
          tooltip={"Previous"}
        />
      ) : (
        <TooltipElement
          element={
            <button onClick={onClick} className={buttonTail}>
              <StepForward />
            </button>
          }
          tooltip={"Next"}
        />
      )}
    </div>
  );
};

export default HomeCarousel;
