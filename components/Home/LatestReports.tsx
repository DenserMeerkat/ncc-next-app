"use client";
import Carousel from "react-multi-carousel";

const responsive = {
  largeScreen: {
    breakpoint: { max: 3000, min: 1980 },
    items: 5,
    slidesToSlide: 3,
    partialVisibilityGutter: 20,
  },
  desktop: {
    breakpoint: { max: 1980, min: 1024 },
    items: 4,
    slidesToSlide: 2,
    partialVisibilityGutter: 20,
  },
  tablet: {
    breakpoint: { max: 1024, min: 600 },
    items: 3,
    slidesToSlide: 2,
    partialVisibilityGutter: 10,
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 2,
    slidesToSlide: 2,
    partialVisibilityGutter: 10,
  },
};

const LatestReports = (props: any) => {
  const years = props.years;
  return (
    <div className="max-w-6xl mx-auto">
      <Carousel
        className="z-0 px-6 py-3"
        ssr={true}
        swipeable={true}
        draggable={true}
        showDots={false}
        responsive={responsive}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        transitionDuration={500}
        customTransition="transform 500ms ease-in-out"
        infinite={false}
        partialVisible={true}
      >
        {years.map((item: React.ReactElement<any>, index: number) => (
          <CarouselItem key={index}>{item}</CarouselItem>
        ))}
      </Carousel>
    </div>
  );
};

export default LatestReports;

const CarouselItem = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-fit border bg-zinc-100 dark:bg-slate-900 rounded-sm md:rounded-md mr-2 ">
      {children}
    </div>
  );
};
