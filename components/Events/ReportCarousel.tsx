"use client";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useState } from "react";
import { Pause, Play, StepForward, StepBack } from "lucide-react";
import TooltipElement from "../common/TooltipElement";
import Image from "next/legacy/image";

const ReportCarousel = (props: any) => {
  const images = props.images;
  const captions: string[] = props.captions;
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
    setActive(active < length - 1 ? active + 1 : 0);
  };
  const handlePrevClick = () => {
    setActive(active > 0 ? active - 1 : length - 1);
  };
  return (
    <div className="flex flex-col lg:flex-row gap-4 xl:gap-8 mt-8 items-center max-w-full justify-center">
      {images.length > 1 && (
        <div className="flex-wrap flex flex-row lg:flex-col select-none ">
          {images.map((image: string, index: number) => (
            <div
              key={index}
              className={active === index ? thumbTailActive : thumbTail}
            >
              <div className="p-1 h-[50px] w-[80px]  sm:h-[74px] sm:w-[114px]">
                <div className="relative flex items-center w-full h-full">
                  <Image
                    key={index}
                    src={image}
                    layout="fill"
                    alt={`Thumbnail ${index + 1}`}
                    className="h-14 sm:h-16 rounded-sm object-cover border"
                    onClick={() => {
                      setActive(index);
                    }}
                    quality={10}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <div
        id="carousel"
        className="relative p-0 sm:p-1 border 
      md:rounded-lg border-gray-300 dark:border-slate-700"
      >
        {images.length > 1 && (
          <div className="relative w-full">
            <div
              aria-label="Carousel Controls"
              className="flex gap-0.5 absolute z-10 left-1/2 transform -translate-x-1/2 md:left-auto md:right-0 md:translate-x-0
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
          </div>
        )}
        <Carousel
          selectedItem={active}
          className="min-w-[300px] max-w-[600px] min-h-[200px] h-max md:rounded-md overflow-hidden bg-rose-200 dark:bg-slate-800"
          autoPlay={autoplay}
          swipeable={true}
          infiniteLoop={true}
          showStatus={false}
          showIndicators={false}
          showArrows={false}
          showThumbs={false}
          stopOnHover={false}
          renderThumbs={() => []}
          onChange={handleCarouselChange}
        >
          {images.map((image: string, index: number) => (
            <div key={index} className="max-w-full">
              <div className="relative select-none max-w-full ">
                <Image
                  src={image}
                  width={1100}
                  height={750}
                  layout="responsive"
                  alt={image}
                  loading="lazy"
                  quality={100}
                />
              </div>
              {captions.length != 0 && (
                <div className="py-0.5 flex items-center justify-center">
                  <p className="text-xs sm:text-sm">{captions[index]}</p>
                </div>
              )}
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default ReportCarousel;
