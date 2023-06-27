"use client";

import TooltipElement from "../common/TooltipElement";
import { Pause, Play, StepForward, StepBack } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Intersection } from "@splidejs/splide-extension-intersection";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { Carousel as ResCarousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";

SwiperCore.use([Autoplay, Navigation, Pagination]);

export const Hero = () => {
  const nccWallpaper = "/images/ncc_wallpaper.jpg";
  return (
    <div className="max-w-5xl mx-auto  mt-10 mb-10">
      <div
        className="p-0 md:p-2 border border-gray-300 dark:border-slate-700
       lg:rounded-lg bg-rose-100 dark:bg-slate-900 "
      >
        <div className="lg:rounded-md">
          <h2>Splide</h2>
          <SplideCarousel />
          <div className="m-4"></div>
          <h2>MultiCarousel</h2>
          <MultiCarousel />
          <div className="m-4"></div>
          <h2>SwiperJs</h2>
          <SwiperCarousel />
          <div className="m-4"></div>
          <h2>ResponsiveCarousel</h2>
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

const MultiCarousel = () => {
  const nccWallpaper = "/images/ncc_wallpaper.jpg";
  const imgTail =
    "relative mx-1 rounded-md overflow-hidden object-cover select-none pointer-events-none";
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Carousel
      responsive={responsive}
      partialVisbile={false}
      autoPlay
      ssr
      infinite
      removeArrowOnDeviceType={["tablet", "mobile"]}
    >
      <div className={imgTail}>
        <Image src={nccWallpaper} width={1920} height={1080} alt="Image 1" />
      </div>

      <div className={imgTail}>
        <Image src={nccWallpaper} width={1920} height={1080} alt="Image 1" />
      </div>

      <div className={imgTail}>
        <Image src={nccWallpaper} width={1920} height={1080} alt="Image 1" />
      </div>

      <div className={imgTail}>
        <Image src={nccWallpaper} width={1920} height={1080} alt="Image 1" />
      </div>

      <div className={imgTail}>
        <Image src={nccWallpaper} width={1920} height={1080} alt="Image 1" />
      </div>

      <div className={imgTail}>
        <Image src={nccWallpaper} width={1920} height={1080} alt="Image 1" />
      </div>
    </Carousel>
  );
};

const SplideCarousel = () => {
  const nccWallpaper = "/images/ncc_wallpaper.jpg";
  const splideOptions = {
    type: "loop",
    perPage: 1,
    autoplay: true,
    interval: 3000,
    intersection: {
      inView: {
        autoplay: true,
      },
      outView: {
        autoplay: false,
      },
    },
  };
  const imgTail = "mx-1 rounded-md overflow-hidden";
  useEffect(() => {
    splideOptions;
  }, []);
  return (
    <div>
      <Splide options={splideOptions}>
        <SplideSlide>
          <div className={imgTail}>
            <img src={nccWallpaper} alt="Image 1" />
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className={imgTail}>
            <img src={nccWallpaper} alt="Image 1" />
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className={imgTail}>
            <img src={nccWallpaper} alt="Image 1" />
          </div>
        </SplideSlide>
        {/* Add more SplideSlide components as needed */}
      </Splide>
    </div>
  );
};

const SwiperCarousel = () => {
  const [swiperRef, setSwiperRef] = useState<SwiperCore | null>(null);
  const [autoplay, setAutoplay] = useState(true);
  const nccWallpaper = "/images/ncc_wallpaper.jpg";
  const imgTail = "relative mx-0 md:rounded-md overflow-hidden";
  const controlTail = `p-1 bg-rose-200 dark:bg-slate-700 text-gray-700 dark:text-slate-300
    hover:bg-rose-300 dark:hover:bg-slate-600  transition-colors`;
  useEffect(() => {
    if (swiperRef) {
      swiperRef.autoplay.stop();
      if (autoplay) {
        swiperRef.autoplay.start();
      }
    }
  }, [swiperRef, autoplay]);
  const swiperAutoplay = {
    delay: 3000,
    disableOnInteraction: false,
  };
  const handleAutoplayClick = () => {
    const swiper = swiperRef;
    setAutoplay((prevAutoplay) => {
      if (prevAutoplay) {
        swiper?.autoplay.stop();
        return false;
      } else {
        swiper?.autoplay.start();
        return true;
      }
    });
  };
  const handleNextClick = () => {
    swiperRef?.slideNext();
  };
  const handlePrevClick = () => {
    swiperRef?.slidePrev();
  };

  return (
    <div className="relative">
      <div
        aria-label="Carousel Controls"
        className="flex gap-0.5 absolute z-10 
  -bottom-8 left-1/2 transform -translate-x-1/2 
  md:bottom-auto md:top-0 md:left-auto md:right-0 md:translate-x-0
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
      <Swiper
        onSwiper={setSwiperRef}
        spaceBetween={10}
        slidesPerView={1}
        autoplay={autoplay ? swiperAutoplay : false}
        modules={[Autoplay, Pagination, Navigation]}
        navigation
        pagination={{ clickable: true }}
        className="relative max-w-5xl rounded-md overflow-visible mx-auto"
      >
        <SwiperSlide>
          <div className={imgTail}>
            <img src={nccWallpaper} alt="Image 1" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={imgTail}>
            <img src={nccWallpaper} alt="Image 1" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={imgTail}>
            <img src={nccWallpaper} alt="Image 1" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={imgTail}>
            <img src={nccWallpaper} alt="Image 1" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={imgTail}>
            <img src={nccWallpaper} alt="Image 1" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={imgTail}>
            <img src={nccWallpaper} alt="Image 1" />
          </div>
        </SwiperSlide>
      </Swiper>
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
    setActive(active < length - 1 ? active + 1 : 0);
  };
  const handlePrevClick = () => {
    setActive(active > 0 ? active - 1 : length - 1);
  };
  return (
    <div className="flex flex-col lg:flex-row gap-4 xl:gap-8 mt-8 items-center">
      <div
        id="carousel"
        className="relative p-0 sm:p-1 border 
      md:rounded-lg border-gray-300 dark:border-slate-700"
      >
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
        <ResCarousel
          selectedItem={active}
          className="max-w-5xl min-h-[200px] h-max md:rounded-md overflow-hidden bg-rose-200 dark:bg-slate-800"
          autoPlay={autoplay}
          infiniteLoop={true}
          showStatus={false}
          showIndicators={true}
          showArrows={false}
          showThumbs={false}
          stopOnHover={false}
          renderThumbs={() => []}
          onChange={handleCarouselChange}
        >
          {images.map((image: string, index: number) => (
            <div key={index} className="">
              <div>
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
        </ResCarousel>
      </div>
    </div>
  );
};

export default Hero;
