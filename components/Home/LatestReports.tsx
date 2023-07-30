"use client";
import React, { useState, useRef, forwardRef, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TooltipElement from "../common/TooltipElement";
import { StepBack, StepForward } from "lucide-react";
import { controlTail } from "../common/tailwindCSS";

/* eslint-disable react/display-name */
LatestReports.displayName = "LatestReports";
export default function LatestReports(props: any) {
  const [isDomLoaded, setIsDomLoaded] = useState(false);
  useEffect(() => {
    setIsDomLoaded(true);
  }, [isDomLoaded]);
  const [index, setIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(0);
  const carouselRef = useRef<Slider>(null);
  const years = props.years;
  const handlePrevious = () => {
    carouselRef.current?.slickPrev();
  };
  const handleNext = () => {
    carouselRef.current?.slickNext();
  };
  const beforeChange = (prev: number, next: number) => {
    setNextIndex(next);
  };
  const afterChange = (index: number) => {
    setIndex(index);
  };
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: beforeChange,
    afterChange: afterChange,
    variableWidth: true,
    arrows: false,
    edgeFriction: 1,
    swipe: index !== years.length - 1,
    responsive: [
      {
        breakpoint: 4000,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 1368,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  if (!isDomLoaded) return <div></div>;
  return (
    <div className="relative px-6">
      <Slider ref={carouselRef} {...settings} className="flex">
        {years.map((item: React.ReactElement<any>, index: number) => (
          <CarouselItem key={index}>{item}</CarouselItem>
        ))}
      </Slider>
      <div aria-label="carousel-controls">
        {index !== 0 && (
          <CustomArrow direction="left" onClick={handlePrevious} />
        )}
        {index !== years.length - 1 && (
          <CustomArrow direction="right" onClick={handleNext} />
        )}
      </div>
    </div>
  );
}

const CarouselItem = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-fit bg-zinc-100 dark:bg-slate-900 rounded-md m-1 ">
      {children}
    </div>
  );
};

const CustomArrow = forwardRef(({ onClick, direction }: any, ref) => {
  const buttonTail = `absolute z-10 rounded-md  ${
    direction === "left" ? "left-0 sm:-left-2" : "right-0 sm:-right-2"
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
});
