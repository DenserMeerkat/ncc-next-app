"use client";
import React from "react";
import Image from "next/image";
import { useMediaQuery } from "@mui/material";

const HeroHead = () => {
  const isNonMobile = useMediaQuery("(min-width:900px)");
  const nccShoulder = "/images/ncc_shoulder.png";
  return (
    <div className="border-t  border-gray-300 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 relative overflow-clip">
      <div className="relative max-w-6xl border mx-auto grid grid-cols-12 min-h-screen">
        <div className="max-[900px]:col-span-12 max-[1200px]:col-span-7 max-[10000px]:col-span-6 px-4">
          <span>
            <h1 className="text-6xl font-semibold">
              Empowering leaders, shaping futures
            </h1>
          </span>
          <br />
          <h2 className="text-3xl">- The National Cadet Corps.</h2>
        </div>
        {isNonMobile && (
          <div className="max-[900px]:col-span-0 max-[1200px]:col-span-5 max-[10000px]:col-span-7 sm:col-span-5">
            <div
              className="relative md:w-[700px] md:h-[500px] xl:w-[760px] xl:h-[520px] 2xl:w-[700px] 2xl:h-[500px] 
            rounded-bl-3xl overflow-clip drop-shadow-md"
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
