import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Link from "next/link";
import Image from "next/legacy/image";
import { AspectRatio } from "../ui/aspect-ratio";

const HomeDialog = () => {
  const admission_qr = "/images/misc/admission_qr.jpg";
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          className={`py-1.5 px-4 md:py-2 sm:px-6   rounded-md border border-rose-400 dark:border-blue-500 bg-rose-400 dark:bg-blue-500 text-white
              hover:border-rose-500  hover:dark:border-sky-700 hover:dark:bg-sky-700 hover:bg-rose-500 transition-colors select-none
              font-medium text-lg [word-spacing:2px] font-sans`}
        >
          <p className="drop-shadow-[1px_2px_1px_rgba(0,0,0,0.5)]">
            Start your Journey
          </p>
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Start Your Journey</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          Admissions Open - Join NCC now! Fill the GForm below and start your
          transformative journey. We look forward to welcoming you!
        </DialogDescription>
        <div className="my-4 mx-auto">
          <button>
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSfct-Wep1ICs8F7Ys5OMvx_ePevqHuUntpYHjCNm8Zedd4NNQ/viewform"
              className="rounded-md border border-rose-400 dark:border-blue-500 bg-rose-400 dark:bg-blue-500 text-white
              hover:border-rose-500  hover:dark:border-sky-700 hover:dark:bg-sky-700 hover:bg-rose-500 transition-colors select-none
              font-medium text-lg font-sans
              px-4 py-2"
              target="_blank"
            >
              Link to G-Form
            </Link>
          </button>
          <div className="flex my-6 justify-center items-center">
            <div className="mt-1 h-[1px] w-full bg-gray-300 dark:bg-slate-700"></div>
            <p className="mx-2 text-sm text-gray-500 dark:text-slate-400">or</p>
            <div className="mt-1 h-[1px] w-full bg-gray-300 dark:bg-slate-700"></div>
          </div>
          <div className="mt-4 max-w-xl rounded-lg overflow-hidden border-2 bg-rose-100 dark:bg-slate-900">
            <AspectRatio ratio={1} className="relative">
              <Image
                src={admission_qr}
                alt="Admission Form redirect QR Code"
                layout="fill"
              ></Image>
            </AspectRatio>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default HomeDialog;
