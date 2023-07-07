"use client";
import React, { useState } from "react";
import SectionHeading from "../common/SectionHeading";
import { Tent } from "lucide-react";
import { buttonCSS } from "../common/tailwindCSS";
import camps from "../resources/camps";

const AboutCamp = () => {
  const [active, setActive] = useState(0);
  const handleClick = (index: number) => {
    setActive(index);
  };
  return (
    <div className=" relative h-max py-10">
      <div className=" max-w-5xl mx-auto">
        <SectionHeading icon={Tent} title="Camps in NCC" className={"mb-6"} />
        <div className="grid grid-cols-12 gap-4">
          <div className="md:col-span-5 p-4 flex flex-col gap-4">
            <h3 className="text-3xl font-bold">
              Unlocking{" "}
              <span className="font-extrabold text-rose-500 dark:text-rose-300">
                Extraordiary
              </span>{" "}
              Experiences
            </h3>
            <p className="text-base dark:text-slate-400">
              In the NCC, there are several camps that cadets can attend to
              enhance their skills, knowledge, and overall development.Here are
              details about some of the commonly organized camps.
            </p>
            <ul className="gap-3 mt-2 grid grid-cols-6">
              {camps.map((camp: any, index: number) => (
                <CampButton
                  key={camp.id}
                  id={camp.id}
                  title={camp.shortTitle}
                  active={active === index}
                  onClick={handleClick}
                />
              ))}
            </ul>
          </div>
          <div className="md:col-span-7 border-2 p-4 rounded-xl"></div>
        </div>
      </div>
    </div>
  );
};

export default AboutCamp;

export const CampButton = (props: any) => {
  //Props
  const id = props.id;
  const title = props.title;
  const active = props.active;
  const onClick = props.onClick;
  //Tailwind CSS
  const buttonTail = `border rounded-md col-span-3 flex px-6 py-3 transition-colors select-none`;
  const activeTail = `bg-sky-200/[0.8] dark:bg-slate-800/[0.9] text-sky-950 dark:text-slate-100 border-sky-300 dark:border-slate-700 `;
  const iconTail = `p-0.5 mr-3`;
  const inactiveIconTail = `text-sky-900/[0.5] dark:text-sky-300/[0.5]`;
  const activeIconTail = `text-sky-600 dark:text-sky-400`;
  const inactiveTitleTail = `font-medium text-sky-900/[0.8] dark:text-slate-200/[0.8]`;
  const activeTitleTail = `font-bold text-sky-600 dark:text-sky-400`;
  return (
    <button
      key={id}
      className={`${buttonTail} ${active ? activeTail : ""}`}
      onClick={() => onClick(id)}
    >
      <Tent
        className={`${iconTail} ${active ? activeIconTail : inactiveIconTail}`}
      />
      <h4 className={`${active ? activeTitleTail : inactiveTitleTail}`}>
        {title}
      </h4>
    </button>
  );
};
