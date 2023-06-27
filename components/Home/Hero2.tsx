import React from "react";

export const Hero = () => {
  const nccWallpaper = "/images/ncc_wallpaper.jpg";
  const underlayTail = `w-full h-4/5  rounded-2xl border border-rose-100 dark:border-slate-800 
    bg-[rgba(244,63,94,0.08)]  dark:bg-[rgba(2,63,94,0.1)]  absolute backdrop-filter backdrop-blur-lg`;
  return (
    <div className="grid grid-cols-12 w-full h-4/5 bg-slate-100 dark:bg-slate-900 ">
      <div className="col-span-1" />
      <div className="col-span-3 flex justify-center items-center">
        <h1>National Cadet Corps</h1>
      </div>
      <div className="col-span-8 flex justify-center h-full  overflow-visible relative">
        <div className={`${underlayTail} mt-8 mr-16 `}></div>
        <div className={`${underlayTail} mt-4 mr-8 `}></div>
        <img
          src={nccWallpaper}
          alt="NCC group photo"
          className="object-cover h-4/5 w-full rounded-bl-lg rounded-tl-lg rounded-br-lg absolute"
        />
      </div>
    </div>
  );
};

export default Hero;
