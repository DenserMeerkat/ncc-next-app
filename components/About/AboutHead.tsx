import React from "react";
import SectionHeading from "../common/SectionHeading";
import { Info, Target, Goal } from "lucide-react";
import objectives from "../../resources/objectives.ts";

const AboutHead = () => {
  return (
    <div className="bg-slate-100 dark:bg-slate-900/[0.7] relative h-max py-12">
      <div className=" max-w-6xl mx-auto">
        <SectionHeading className="mb-6" icon={Info} title="About NCC" />
        <div>
          <p
            className="text-justify px-2 sm:px-4 text-sm md:text-base
          dark:text-slate-300"
          >
            The National Cadet Corps (NCC) is a premier youth development
            program in India. With its roots deeply embedded in the ideals of
            discipline, leadership, and service, the NCC aims to shape the
            character and potential of young individuals across the country.
            Through a structured training program, cadets undergo a
            transformative journey that instills qualities such as integrity,
            selflessness, and a sense of responsibility towards society. NCC
            cadets engage in various activities, including military training,
            community service, adventure sports, and cultural events, fostering
            holistic development. By promoting values of patriotism, unity, and
            social integration, the NCC plays a crucial role in nation-building.
            The program also opens doors to numerous career opportunities,
            scholarships, and international exchange programs.
          </p>
        </div>
        <SectionHeading
          className="mb-4 mt-10"
          icon={Target}
          title="Objectives of NCC"
        />
        <div className="grid grid-cols-12 ">
          {objectives.map((objective) => (
            <ObjectiveCard
              key={objective.id}
              id={objective.id}
              title={objective.title}
              desc={objective.desc}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutHead;

const ObjectiveCard = (props: any) => {
  const id = props.id;
  const title = props.title;
  const desc = props.desc;
  return (
    <div
      key={id}
      className="col-span-12 min-[570px]:col-span-6 lg:col-span-4 
    m-2 p-4 border-2 rounded-md
    odd:border-rose-200 odd:bg-rose-100
    even:border-sky-200 even:bg-sky-100
    dark:odd:border-slate-700/[0.6] dark:odd:bg-slate-800/[0.5]
    dark:even:border-slate-700 dark:even:bg-slate-800"
    >
      <div className="flex">
        <Goal className="p-0.5 mr-3 text-rose-900 font-extrabold dark:text-rose-300" />
        <h3 className="text-sm sm:text-base font-medium md:font-bold mb-2">
          {title}
        </h3>
      </div>
      <div className="flex flex-col">
        <p className="text-sm text-gray-800 dark:text-slate-400">{desc}</p>
      </div>
    </div>
  );
};
