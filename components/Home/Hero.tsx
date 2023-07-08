"use client";
import React from "react";
import Image from "next/image";
import { useMediaQuery } from "@mui/material";
import Link from "next/link";
import TooltipElement from "../common/TooltipElement";
import SectionHeading from "../common/SectionHeading";

const Hero = () => {
  const isNonMobile = useMediaQuery("(min-width:900px)");
  const nccShoulder = "/images/wallpapers/ncc_shoulder.png";
  const nccFlag = "/images/logos/ncc_flag.png";
  const logoBgTail = `rounded-xl bg-sky-50 dark:bg-slate-800 mix-blend-color-darken border-2 border-gray-300 dark:border-slate-700
  transition-colors hover:bg-rose-200 dark:hover:bg-slate-700 hover:border-rose-400 dark:hover:border-slate-600`;
  const logoTail = `relative flex items-center justify-center min-w-[80px] h-auto max-w-[100px] w-[15%] aspect-[1/1] object-contain drop-shadow-sm`;
  return (
    <div className="bg-slate-100 dark:bg-slate-900 relative overflow-clip  h-fit">
      <div className="relative max-w-7xl  mx-auto grid grid-cols-12  h-fit">
        <div className="pt-12 max-[900px]:col-span-12 max-[1200px]:col-span-7 max-[10000px]:col-span-6 px-2 flex flex-col max-[900px]:items-center">
          <SectionHeading
            className="mb-2"
            customIcon={
              <div className=" flex items-center ">
                <Image width={20} height={20} src={nccFlag} alt="NCC Flag" />
              </div>
            }
            title={"National Cadet Corps"}
          />
          <div className="mt-3">
            <h1
              className="max-[500px]:max-w-[380px] max-[1100px]:max-w-[580px] max-[4000px]:max-w-[620px ] leading-tight
              max-[500px]:text-[1.75em] max-[1100px]:text-[2.75em]  max-[1300px]:text-[3.5em] max-[9300px]:text-[3.75em] font-bold text-gray-900 dark:text-slate-200 max-[900px]:text-center"
            >
              Empowering{" "}
              <span className="text-rose-800 dark:text-rose-500 font-extrabold">
                youth
              </span>
              , shaping new{" "}
              <span className="text-blue-800 dark:text-blue-500 font-extrabold">
                leaders
              </span>
              , securing the{" "}
              <span className="text-sky-800 dark:text-sky-500 font-extrabold">
                future
              </span>
              .
            </h1>
          </div>
          <br />
          <p className="max-w-[620px] px-1 pr-2 text-sm sm:text-base text-gray-700 dark:text-slate-400 max-[900px]:text-center">
            Prepare yourself for a lifetime of leadership and excellence. Unlock
            opportunities, embrace challenges, and create lasting memories. Join
            us on a journey of courage, character, and service.
          </p>
          <br />
          <div className="flex flex-col gap-6 min-[900px]:gap-6 min-[900px]:flex-row">
            <button
              className={`py-1.5 px-4 md:py-2 md:px-6 rounded-md border border-rose-400 dark:border-blue-500 bg-rose-400 dark:bg-blue-500 text-white
              hover:border-rose-500  hover:dark:border-sky-700 hover:dark:bg-sky-700 hover:bg-rose-500 transition-colors select-none
              font-medium text-lg [word-spacing:3px] font-sans`}
            >
              <Link href="#">
                <p className="drop-shadow-[1px_2px_1px_rgba(0,0,0,0.5)]">
                  Start your Journey
                </p>
              </Link>
            </button>
            <button
              className={`py-1.5 px-4 md:py-2 md:px-6  rounded-md border-2 font-semibold text-md tracking-wide border-gray-400 bg-slate-200/[0.7] 
              text-gray-700 dark:text-white/[0.8] hover:bg-slate-300 hover:border-slate-500 transition-colors select-none
              dark:border-slate-500 dark:bg-slate-700 dark:hover:bg-slate-800 dark:hover:border-slate-700`}
            >
              <Link href="#">
                <p>Learn More</p>
              </Link>
            </button>
          </div>
        </div>
        {isNonMobile && (
          <div className="max-[900px]:col-span-0 max-[1200px]:col-span-5 max-[10000px]:col-span-7 sm:col-span-5">
            <div
              className="relative md:w-[700px] md:h-[500px] xl:w-[760px] xl:h-[530px] 2xl:w-[760px] 2xl:h-[530px] 
            rounded-bl-3xl overflow-clip drop-shadow-md border-b-2 border-r-2 border-l-2 border-transparent dark:border-slate-700"
            >
              <Image
                src={nccShoulder}
                fill
                alt="Hero Image showing NCC arm badge with Anna University Red building background"
              />
            </div>
          </div>
        )}
      </div>
      <div className="px-8 md:px-0 flex flex-wrap mx-auto gap-12 md:gap-12 gap-y-4 lg:gap-24 justify-center pt-20 pb-10 select-text">
        <div className={`${logoTail} p-4`}>
          <TooltipElement
            element={
              <Image
                height={100}
                width={100}
                src="/images/logos/ncc_icon_png.png"
                alt="National Cadet Corps Logo"
              />
            }
            tooltip={"National Cadet Corps"}
          />
        </div>
        <div className={`${logoTail} p-3`}>
          <TooltipElement
            element={
              <Image
                height={80}
                width={80}
                src="/images/logos/AU_logo_1.png"
                alt="Anna University Logo"
              />
            }
            tooltip={"Anna University"}
          />
        </div>
        <div className={`${logoTail} p-2`}>
          <TooltipElement
            element={
              <Image
                height={100}
                width={100}
                src="/images/logos/CEG_col.png"
                alt="College of Engineering Guindy Logo"
              />
            }
            tooltip={"College of Engineering, Guindy"}
          />
        </div>
        <div className={`${logoTail} p-2`}>
          <TooltipElement
            element={
              <Image
                height={100}
                width={100}
                src="/images/logos/ACT_logo_2.png"
                alt="Alagappa College of Technology Logo"
              />
            }
            tooltip={"Alagappa College of Technology"}
          />
        </div>
        <div className={logoTail}>
          <TooltipElement
            element={
              <Image
                height={120}
                width={120}
                src="/images/logos/azadi_ka_amrit_2.png"
                alt="Azadi Ka Amrit Mahotsav Logo"
              />
            }
            tooltip={"Azadi Ka Amrit Mahotsav"}
          />
        </div>
      </div>
      <div className="text-sm sm:text-base max-w-2xl mx-auto text-center pb-12 text-gray-500 dark:text-slate-400">
        <p>
          Creating organized, trained, and motivated youth, equipped to provide
          leadership in every sphere of life, and unwaveringly committed to
          serving our nation.
        </p>
      </div>
    </div>
  );
};

export default Hero;
