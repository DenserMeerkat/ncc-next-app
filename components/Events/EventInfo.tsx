import React from "react";
import Image from "next/legacy/image";
import SectionHeading from "../common/SectionHeading";
import { SquareGantt } from "lucide-react";
import eventInfo from "../../resources/eventInfo.ts";
import TooltipElement from "../common/TooltipElement";

const EventInfo = () => {
  return (
    <div className=" h-fit">
      <div className="max-w-5xl mx-auto py-12 flex flex-col gap-y-12">
        <SectionHeading icon={SquareGantt} title={"Standout Events"} />
        {eventInfo.map((event) => (
          <EventCard
            key={event.id}
            id={event.id}
            title={event.name}
            img={event.logo}
            alt={`${event.name} logo`}
            description={event.desc}
          />
        ))}
      </div>
    </div>
  );
};

export default EventInfo;

const EventCard = (props: any) => {
  const id = props.id;
  const title = props.title;
  const src = props.img;
  const alt = props.alt;
  const description = props.description;
  return (
    <div
      key={id}
      className="flex items-center gap-4 lg:px-8 flex-col min-[700px]:even:flex-row-reverse min-[700px]:odd:flex-row lg:rounded-lg py-6 border 
      odd:border-blue-200 even:border-rose-200 odd:bg-blue-100 even:bg-rose-100 even:selection:bg-slate-200  even:dark:border-slate-700 odd:dark:border-slate-800 odd:dark:bg-sky-600/[0.1] even:dark:bg-slate-800/[0.5] "
    >
      <TooltipElement
        element={
          <div className="flex flex-col even:flex-col-reverse items-center w-[250px] shrink-0">
            <Image
              src={src}
              height={200}
              width={200}
              blurDataURL={src.replace("images", "min_images")}
              placeholder="blur"
              alt={alt}
            />
          </div>
        }
        tooltip={title}
      />

      <div className="">
        <h2 className="text-center font-bold text-xl mb-2">{title}</h2>
        <p className="text-sm sm:text-base text-gray-700 dark:text-slate-400 text-justify px-4  lg:px-0 indent-10 ">
          {description}
        </p>
      </div>
    </div>
  );
};
