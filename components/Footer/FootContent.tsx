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
      min-w-[300px] w-full max-w-xl lg:w-max h-max
      flex flex-col justify-between px-6 
      bg-slate-50 dark:bg-gray-900 drop-shadow-sm dark:drop-shadow-none`}
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
      <div className="flex flex-wrap justify-around px-4 border-t py-4">
        <SocialLink
          href={"https://www.instagram.com/nccarmyannauniv/"}
          hoverColor={"hover:bg-pink-200"}
          icon={<Instagram />}
          tooltip={"Instagram"}
        />
        <SocialLink
          href={"https://www.facebook.com/nccarmy.annauniv"}
          hoverColor={"hover:bg-blue-200"}
          icon={<Facebook />}
          tooltip={"Facebook"}
        />
        <SocialLink
          href={"https://www.linkedin.com/company/ncc-army-anna-university/"}
          hoverColor={"hover:bg-sky-200"}
          icon={<Linkedin />}
          tooltip={"LinkedIn"}
        />
        <SocialLink
          href={"https://www.youtube.com/@nccarmyannauniv.5771"}
          hoverColor={"hover:bg-rose-200"}
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
  const tooltip = porps.tooltip;
  const socialTail = `flex items-center justify-around 
  p-2 rounded-md border cursor-pointer 
  dark:hover:bg-slate-800 transition
  border-gray-400 dark:border-slate-700
  text-gray-700 dark:text-slate-300`;
  return (
    <TooltipElement
      element={
        <Link
          href={href}
          target="_blank"
          className={`${socialTail} ${hoverColor}`}
        >
          {icon}
        </Link>
      }
      tooltip={tooltip}
    />
  );
};
