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

export const FootContent = () => {
  return (
    <div
      className={`rounded-md m-2 border border-gray-300 dark:border-slate-700 
      min-w-[300px] w-full max-w-xl sm:w-full xl:w-max lg:h-96
      flex flex-col justify-between px-6 
      bg-white dark:bg-gray-900 drop-shadow-sm dark:drop-shadow-none`}
    >
      <div className="mt-8">
        <h4 className="text-md font-bold pl-1 sm:px-8">
          NCC Army Wing, Anna University{" "}
        </h4>
        <div className="pl-2 sm:px-7 mt-6 grid grid-cols-8 gap-y-5">
          <MapPin className="col-span-1" size={20} />
          <div className="col-span-7">
            <p className="text-sm">
              1 TN Composite Technical Company,
              <br />
              Mardras &lsquo;B&rsquo; group,
              <br />
              Anna University,
              <br /> Guindy ,Chennai - 600025
            </p>
          </div>
          <AtSign className="col-span-1" size={20} />
          <div className="col-span-7">
            <p className="text-md">
              <s>nccannauniv@gmail.com</s>
            </p>
          </div>
          <PhoneOutgoing className="col-span-1" size={18} />
          <div className="col-span-7">
            <p className="text-sm">
              <s>+91-9123456789</s>
            </p>
            <p className="text-sm">
              <s>+91-9123456789</s>
            </p>
          </div>
        </div>
      </div>
      <br />
      <div className="border-t mx-4"></div>
      <div className="mx-auto max-w-[400px] gap-3 sm:gap-5 md:gap-10 flex flex-wrap justify-around px-4  py-4">
        <SocialLink
          href={"https://www.instagram.com/nccarmyannauniv/"}
          hoverColor={"hover:bg-pink-200"}
          hoverTextColor={"hover:text-pink-700"}
          darkHoverColor={"dark:hover:text-pink-400"}
          icon={<Instagram />}
          tooltip={"Instagram"}
        />
        <SocialLink
          href={"https://www.facebook.com/nccarmy.annauniv"}
          hoverColor={"hover:bg-blue-200"}
          hoverTextColor={"hover:text-blue-700"}
          darkHoverColor={"dark:hover:text-blue-400"}
          icon={<Facebook />}
          tooltip={"Facebook"}
        />
        <SocialLink
          href={"https://www.linkedin.com/company/ncc-army-anna-university/"}
          hoverColor={"hover:bg-sky-200"}
          hoverTextColor={"hover:text-sky-700"}
          darkHoverColor={"dark:hover:text-sky-400"}
          icon={<Linkedin />}
          tooltip={"LinkedIn"}
        />
        <SocialLink
          href={"https://www.youtube.com/@nccarmyannauniv.5771"}
          hoverColor={"hover:bg-rose-200"}
          hoverTextColor={"hover:text-rose-700"}
          darkHoverColor={"dark:hover:text-rose-400"}
          icon={<Youtube />}
          tooltip={"Youtube"}
        />
      </div>
    </div>
  );
};

export default FootContent;

const SocialLink = (porps: any) => {
  const href = porps.href;
  const icon = porps.icon;
  const hoverColor = porps.hoverColor;
  const hoverTextColor = porps.hoverTextColor;
  const darkHoverColor = porps.darkHoverColor;
  const tooltip = porps.tooltip;
  const socialTail = `flex items-center justify-around 
  p-2 rounded-md border cursor-pointer 
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
          {icon}
        </Link>
      }
      tooltip={tooltip}
    />
  );
};
