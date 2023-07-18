"use client";
import React from "react";
import Slider, { CustomArrowProps } from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const LatestReports = (props: any) => {
  const years = props.years;
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 2,
    variableWidth: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <Slider {...settings} className="">
      <div className="h-72 w-80 px-6">
        <div className="bg-slate-900  rounded-md h-3/5 flex items-center justify-center">
          <h2 className="text-2xl font-medium tracking-wider w-36 text-center">
            Latest <br /> Reports
          </h2>
        </div>
      </div>
      {years.map((item: React.ReactElement<any>, index: number) => (
        <CarouselItem key={index}>{item}</CarouselItem>
      ))}
    </Slider>
  );
};

const CarouselItem = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-fit border bg-zinc-100 dark:bg-slate-900 rounded-sm md:rounded-md mr-2 ">
      {children}
    </div>
  );
};

function CustomPrevArrow({ onClick, className, style }: CustomArrowProps) {
  return (
    <button
      className={`${className} ${
        style && style.display === "none" ? "hidden" : ""
      } bg-blue-900`}
      onClick={onClick}
      disabled={style && style.display === "none"}
    >
      Prev
    </button>
  );
}

function CustomNextArrow({ onClick, className, style }: CustomArrowProps) {
  return (
    <button
      className={`${className} ${
        style && style.display === "none" ? "hidden" : ""
      }`}
      onClick={onClick}
      disabled={style && style.display === "none"}
    >
      Next
    </button>
  );
}
