import React from "react";
import SectionHeading from "../common/SectionHeading";
import { Sparkle } from "lucide-react";
import Image from "next/image";
import Quote from "@/components/common/Quote";
import { anos } from "@/resources/anos";

const Current = () => {
  return (
    <div className="h-fit">
      <div className="max-w-6xl mx-auto py-10">
        <Quote>
          Where officers{" "}
          <span className="text-red-900 dark:text-red-400 font-bold">lead</span>
          , cadets{" "}
          <span className="text-blue-900 dark:text-blue-400 font-bold">
            thrive
          </span>
          ,<span className="hidden md:inline">{"and "}</span>
          alumni{" "}
          <span className="text-sky-900 dark:text-sky-400 font-bold">
            inspire
          </span>
          .
        </Quote>
        <SectionHeading
          className={"mb-6"}
          icon={Sparkle}
          title="Guiding Lights of our Wing"
        />
        <div className="flex flex-col md:flex-row md:flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-8 px-0 min-[350px]:px-3">
          {anos.map((ano: any, index: number) => (
            <AnoCard key={index} {...ano} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Current;

const AnoCard = (props: any) => {
  const { id, name, src, alt, plat, minSrc, desig, dept } = props;
  return (
    <div
      key={id}
      className="w-full min-[350px]:w-[350px] h-48  relative min-[350px]:rounded-md overflow-clip flex flex-row
        bg-sky-100/[0.5] dark:bg-slate-900 border border-gray-300 dark:border-slate-800
        drop-shadow-md transition select-none  font-medium"
    >
      <Image
        className="border-r border-gray-300 dark:border-slate-700 "
        width={150}
        height={187.5}
        src={src}
        alt={alt}
        blurDataURL={minSrc}
        placeholder="blur"
      />
      <div className="py-4 w-full flex flex-col items-center justify-between">
        <div>
          <div className="mx-auto w-fit rounded-full px-4 py-1 mb-2 border border-rose-200 dark:border-slate-600 bg-rose-100 dark:bg-slate-800">
            <p className="text-xs font-medium dark:text-slate-300 tracking-wider">
              {plat}
            </p>
          </div>
          <div>
            <h3 className="text-sm max-w-[180px] text-center font-bold">
              {name}
            </h3>
          </div>
        </div>
        <div className="text-[0.68rem]">
          <p className="dark:text-slate-300  font-bold dark:font-medium">
            {desig}
          </p>
          <p className="dark:text-slate-400 max-[340px]:text-[0.65rem]">
            {dept}
          </p>
          <p className="dark:text-slate-400 text-[0.6rem]">Anna University</p>
        </div>
      </div>
    </div>
  );
};
