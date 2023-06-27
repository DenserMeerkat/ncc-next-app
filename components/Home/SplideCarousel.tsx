import Image from "next/image";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/sea-green";
import { Intersection } from "@splidejs/splide-extension-intersection";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

const SplideCarousel = (props: any) => {
  const images = props.images;
  const splideOptions = {
    type: "loop",
    perPage: 1,
    gap: "1rem",
    autoScroll: {
      speed: 1,
    },
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
  const imgTail = "mx-1 rounded-md overflow-hidden relative";

  return (
    <Splide options={splideOptions} hasTrack={false}>
      <SplideTrack>
        {images.map((image: string, index: number) => (
          <SplideSlide key={index} className={imgTail}>
            <div className={imgTail}>
              <Image src={image} height={1080} width={1920} alt="Image 1" />
            </div>
          </SplideSlide>
        ))}
      </SplideTrack>
    </Splide>
  );
};

export default SplideCarousel;
