"use client";
import React from "react";
import Image from "next/image";
import { useMediaQuery } from "@mui/material";
import Link from "next/link";

const HeroHead = () => {
  const isNonMobile = useMediaQuery("(min-width:900px)");
  const nccShoulder = "/images/ncc_shoulder.png";
  return (
    <div className="bg-slate-100 dark:bg-slate-900 relative overflow-clip">
      <div className="relative max-w-7xl  mx-auto grid grid-cols-12 min-h-screen">
        <div className="pt-16 max-[900px]:col-span-12 max-[1200px]:col-span-7 max-[10000px]:col-span-6 px-2 flex flex-col max-[900px]:items-center">
          <div className="w-fit flex items-center mb-2 ml-1.5 px-1 pb-3 border-b-2">
            <div className=" mr-3 flex items-center ">
              <Image
                width={20}
                height={20}
                src="/images/logos/ncc_flag.png"
                alt="NCC logo"
              />
            </div>
            <p className="text-sm tracking-widest font-medium">
              National Cadet Corps
            </p>
          </div>
          <div className="mt-3">
            <h1 className="max-w-[630px] leading-tight text-[2em] md:text-[3em]  min-[1100px]:text-[3.75em] font-bold text-gray-900 dark:text-slate-200 max-[900px]:text-center">
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
          <p className="max-w-[620px] px-1 pr-2 text-md text-gray-700 dark:text-slate-400 max-[900px]:text-center">
            Prepare yourself for a lifetime of leadership and excellence. Unlock
            opportunities, embrace challenges, and create lasting memories. Join
            us on a journey of courage, character, and service.
          </p>
          <br />
          <div className="flex flex-col gap-6 min-[900px]:gap-10 min-[900px]:flex-row">
            <button
              className={`py-2 px-6 rounded-md border-2 border-rose-400 dark:border-blue-500 bg-rose-400 dark:bg-blue-500 text-white
              hover:border-rose-500  hover:dark:border-sky-700 hover:dark:bg-sky-700 hover:bg-rose-500 transition-colors
              font-medium text-lg [word-spacing:3px] font-sans`}
            >
              <Link href="#">
                <p className="drop-shadow-[1px_2px_1px_rgba(0,0,0,0.5)]">
                  Start your Journey
                </p>
              </Link>
            </button>
            <button
              className={`py-2 px-6 rounded-md border-2 font-medium text-md tracking-wide border-gray-400 bg-slate-400/[0.7] 
              text-white dark:text-white/[0.8] hover:bg-slate-400 hover:border-slate-400 transition-colors
              dark:border-slate-500 dark:bg-slate-700 dark:hover:bg-slate-800 dark:hover:border-slate-700`}
            >
              <Link href="#">
                <p className="drop-shadow-[1px_2px_3px_rgba(0,0,0,0.5)]">
                  Learn More
                </p>
              </Link>
            </button>
          </div>
        </div>
        {isNonMobile && (
          <div className="max-[900px]:col-span-0 max-[1200px]:col-span-5 max-[10000px]:col-span-7 sm:col-span-5">
            <div
              className="relative md:w-[700px] md:h-[500px] xl:w-[760px] xl:h-[530px] 2xl:w-[760px] 2xl:h-[530px] 
            rounded-bl-3xl overflow-clip drop-shadow-md border-b-2 border-l-2 border-slate-700"
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
    </div>
  );
};

export default HeroHead;
