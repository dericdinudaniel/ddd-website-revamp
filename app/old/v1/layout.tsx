import type { Metadata } from "next";
import { JetBrains_Mono, Instrument_Serif } from "next/font/google";
import "@/app/globals.css";
import "@/app/old/v1/old.css";

import NavBar from "@/components/old/v1/NavBar";
import Footer from "@/components/old/v1/Footer";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});
const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
});

const fonts = [jetbrainsMono.variable, instrumentSerif.variable];
const fontVariables = fonts.join(" ");

export const metadata: Metadata = {
  title: "Deric Dinu Daniel",
  description: "Built by Deric",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`${fontVariables} antialiased bg-slate-100 dark:bg-slate-900`}
    >
      <div
        className={`mx-auto flex h-screen flex-col font-jetbrains-mono md:px-8 px-2 md:py-6 py-4`}
      >
        <NavBar />
        <main>{children}</main>
        <div className="grow" />
        <Footer />
      </div>
    </div>
  );
}
