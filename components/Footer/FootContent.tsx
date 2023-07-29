import React from "react";
import {
  Instagram,
  Facebook,
  Linkedin,
  Youtube,
  MapPin,
  Mail,
  AtSign,
  PhoneOutgoing,
} from "lucide-react";
import Link from "next/link";
import TooltipElement from "../common/TooltipElement";
import { anos } from "@/resources/anos";

export const FootContent = () => {
  return (
    <div
      className={`rounded-sm sm:rounded-md m-2 border border-gray-300 dark:border-slate-700 
      min-w-[300px] w-full max-w-xl sm:w-full lg:w-max  h-fit lg:h-[26rem]
      flex flex-col justify-between px-6 text-[0.78rem]
      bg-slate-50 dark:bg-slate-950/[0.3] drop-shadow-sm dark:drop-shadow-none`}
    >
      <div className="mt-4 w-fit mx-auto min-[500px]:w-full min-[500px]:mx-auto">
        <h4 className="text-base font-bold pl-1 sm:px-8 pb-4 md:pb-0">
          NCC Army Wing, Anna University
        </h4>
        <div className="pl-2 sm:px-7 mt-2 grid grid-cols-8 gap-4 gap-y-2">
          <MapPin className="col-span-1 h-4 w-4" size={20} />
          <div className="col-span-7">
            <p>
              1 (TN) Composite Technical Company,
              <br />
              Mardras &lsquo;B&rsquo; group,
              <br />
              Anna University,
              <br /> Guindy ,Chennai - 600025
            </p>
          </div>
          <AtSign className="col-span-1 h-4 w-4" size={20} />
          <div className="col-span-7 mb-1">
            <p>annaunivncc@gmail.com</p>
          </div>
          {anos.map((ano) => (
            <div className="col-span-8" key={ano.id}>
              <p className="col-span-8 pb-1 font-bold">{ano.name}</p>
              <div className="pl-8">
                <div className="flex items-center justfy-content gap-2">
                  <AtSign className="col-span-1 h-3 w-3" size={20} />
                  <div className="col-span-7">
                    <p>{ano.email}</p>
                  </div>
                </div>
                <div className="flex items-center justfy-content gap-2">
                  <PhoneOutgoing className="col-span-1 h-3 w-3" size={18} />
                  <div className="col-span-7">
                    <p>{ano.mobile}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mx-auto max-w-[400px] gap-3 sm:gap-5 md:gap-6 flex flex-wrap justify-around px-4 py-4 lg:py-3">
        <SocialLink
          href={"https://www.instagram.com/nccarmyannauniv/"}
          hoverColor={"hover:bg-pink-200"}
          hoverTextColor={"hover:text-pink-700"}
          darkHoverColor={"dark:hover:text-pink-400"}
          icon={Instagram}
          tooltip={"Instagram"}
        />
        <SocialLink
          href={"https://www.facebook.com/nccarmy.annauniv"}
          hoverColor={"hover:bg-blue-200"}
          hoverTextColor={"hover:text-blue-700"}
          darkHoverColor={"dark:hover:text-blue-400"}
          icon={Facebook}
          tooltip={"Facebook"}
        />
        <SocialLink
          href={"https://www.linkedin.com/company/ncc-army-anna-university/"}
          hoverColor={"hover:bg-sky-200"}
          hoverTextColor={"hover:text-sky-700"}
          darkHoverColor={"dark:hover:text-sky-400"}
          icon={Linkedin}
          tooltip={"LinkedIn"}
        />
        <SocialLink
          href={"https://www.youtube.com/@nccarmyannauniv.5771"}
          hoverColor={"hover:bg-rose-200"}
          hoverTextColor={"hover:text-rose-700"}
          darkHoverColor={"dark:hover:text-rose-400"}
          icon={Youtube}
          tooltip={"Youtube"}
        />
      </div>
    </div>
  );
};

export default FootContent;

const SocialLink = (porps: any) => {
  const href = porps.href;
  const Icon = porps.icon;
  const hoverColor = porps.hoverColor;
  const hoverTextColor = porps.hoverTextColor;
  const darkHoverColor = porps.darkHoverColor;
  const tooltip = porps.tooltip;
  const socialTail = `flex items-center justify-around 
  p-1 rounded-md border cursor-pointer 
  dark:hover:bg-slate-800 transition
  border-gray-400 dark:border-slate-700
  text-gray-700 dark:text-slate-300 `;
  return (
    <TooltipElement
      element={
        <Link
          href={href}
          target="_blank"
          className={`${socialTail} ${hoverColor} ${hoverTextColor} ${darkHoverColor}`}
        >
          <Icon className="h-6 w-6" />
        </Link>
      }
      tooltip={tooltip}
    />
  );
};
