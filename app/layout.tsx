import "./globals.css";
import "react-multi-carousel/lib/styles.css";
import { Plus_Jakarta_Sans } from "next/font/google";
import RootComponent from "./Wrappers.tsx";

import { Analytics } from "@vercel/analytics/react";
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "NCC | Anna University",
  description: "Official NCC Website of Anna University, Chennai",
  keywords:
    "NCC, Anna University, NCC Anna University, NCC AU, National Cadet Corps Anna University, National Cadet Corps AU, NCC College of Engineering Guindy, NCC CEG, NCC ACTech, 1 TN CTC NCC",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${plusJakartaSans.className} selection:bg-rose-100 dark:selection:bg-slate-600`}
      >
        <RootComponent>
          {children}
          <Analytics />
        </RootComponent>
      </body>
    </html>
  );
}
