import React from "react";
import Image from "next/image";
import SectionHeading from "../common/SectionHeading";
import { SquareGantt } from "lucide-react";
import eventInfo from "../utils/eventInfo";
import TooltipElement from "../common/TooltipElement";

const EventInfo = () => {
  return (
    <div className="bg-slate-100 dark:bg-slate-900 relative h-fit">
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
      border-rose-200 bg-rose-100  dark:border-slate-700 dark:bg-slate-800 "
    >
      <TooltipElement
        element={
          <div className="flex flex-col even:flex-col-reverse items-center w-[250px] shrink-0">
            <Image src={src} height={200} width={200} alt={alt} />
          </div>
        }
        tooltip={title}
      />

      <div className="">
        <h2 className="text-center font-bold text-xl mb-2">{title}</h2>
        <p className="text-md text-gray-700 dark:text-slate-400 pl-4 indent-10 ">
          {description}
        </p>
      </div>
    </div>
  );
};
