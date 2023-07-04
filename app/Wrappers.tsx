"use client";
import AppBar from "@/components/AppBar/AppBar";
import Footer from "@/components/Footer/Footer";
import { ThemeProvider } from "next-themes";
import { AppStateProvider } from "@/components/utils/AppStateContext";

export default function RootComponet({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider enableSystem defaultTheme="dark" attribute="class">
      <AppStateProvider>
        <AppBar />
        {children}
        <Footer />
      </AppStateProvider>
    </ThemeProvider>
  );
}
