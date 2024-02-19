import React from "react";
import SectionHeading from "../common/SectionHeading";
import { Medal, User } from "lucide-react";
import Image from "next/legacy/image";
import { currentBatch } from "@/resources/leaders";

const Leaders = () => {
  const year: string = currentBatch.year;
  const leaders = [
    currentBatch.csuo,
    currentBatch.cuo1,
    currentBatch.cuo2,
    currentBatch.cuo3,
    currentBatch.csm,
    currentBatch.cqms,
  ];
  return (
    <div className="h-fit mb-6">
      <div className="max-w-6xl mx-auto py-10">
        <SectionHeading
          className={"mb-6"}
          icon={Medal}
          title="Meet our Cadet Leaders"
        />
        <div className="flex items-center justify-center mb-4 sm:mb-6">
          {LeaderCard({ ...leaders[0], showImg: true })}
        </div>
        <div className="flex flex-col md:flex-row md:flex-wrap justify-center items-center gap-4 sm:gap-6 px-0 min-[350px]:px-3  mb-4 sm:mb-6">
          {LeaderCard({ ...leaders[1], showImg: true })}
          {LeaderCard({ ...leaders[2], showImg: true })}
          {LeaderCard({ ...leaders[3], showImg: true })}
        </div>
        <div className="flex flex-col md:flex-row md:flex-wrap justify-center items-center gap-4 sm:gap-6 px-0 min-[350px]:px-3">
          {LeaderCard({ ...leaders[4], showImg: true })}
          {LeaderCard({ ...leaders[5], showImg: true })}
        </div>
      </div>
    </div>
  );
};

export default Leaders;

const LeaderCard = (props: any) => {
  const { id, name, src, alt, plat, desig, dept, showImg } = props;
  return (
    <div
      key={id}
      className="w-full min-[350px]:w-[350px] h-48 relative min-[350px]:rounded-md overflow-clip flex flex-row
          bg-sky-100/[0.5] dark:bg-slate-900 border border-gray-300 dark:border-slate-800
          drop-shadow-md transition select-text font-medium"
    >
      {src != "" && showImg ? (
        <Image
          className="border-r border-gray-300 dark:border-slate-700 select-none"
          width={240}
          height={187.5}
          src={src}
          alt={alt}
          blurDataURL={src.replace("images", "min_images")}
          placeholder="blur"
        />
      ) : (
        <div className="w-[240px] h-48 flex items-center justify-center border-r-2">
          <User className="h-24 w-24 stroke-gray-400 dark:stroke-slate-500 stroke-1  " />
        </div>
      )}
      <div className="py-4 w-full flex flex-col items-center justify-between">
        <div>
          <div className="mx-auto w-fit rounded-full px-4 py-1 mb-2 border border-rose-200 dark:border-slate-600 bg-rose-100 dark:bg-slate-800">
            <p className="text-xs font-medium dark:text-slate-300 tracking-wider">
              {plat}
            </p>
          </div>
          <div className="pt-2">
            <h3 className="text-[0.82rem] max-w-[180px] text-center font-bold">
              {name}
            </h3>
          </div>
        </div>
        <div className="text-[0.68rem] self-start text-left max-[400px]:pl-4 max-[1100px]:pl-6 pl-3">
          <p className="dark:text-slate-300 dark:text-[0.8rem] font-bold dark:font-bold">
            {desig}
          </p>
          <p className={`dark:text-slate-400 max-[340px]:text-[0.65rem]`}>
            {dept}
          </p>
          <p className="dark:text-slate-400 text-[0.6rem]">Anna University</p>
        </div>
      </div>
    </div>
  );
};
