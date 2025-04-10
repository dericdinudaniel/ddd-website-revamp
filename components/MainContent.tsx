import React from "react";
import TopTracks from "@/components/spotify/TopTracks";
import TopArtists from "@/components/spotify/TopArtists";
import Experience from "@/components/Experience";
import AboutMe from "@/components/AboutMe";
import SocialLinks from "./SocialLinks";

type SectionProps = {
  className?: string;
};

const Section1 = ({ className = "" }: SectionProps) => {
  return (
    <section
      className={`${className} min-h-screen flex flex-col justify-center items-center sticky top-0 bg-background`}
    >
      <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-9xl font-bold font-header tracking-[.1rem]">
        Deric Dinu Daniel
      </h1>
      <p className="text-xs sm:text-base md:text-lg lg:text-xl xl:text-2xl">
        Software Engineer. Music Producer.
      </p>
      <SocialLinks />
    </section>
  );
};

const Section2 = ({ className = "" }: SectionProps) => {
  return (
    <section
      className={`${className} min-h-screen flex flex-col justify-center items-center sticky top-0 bg-background border-t`}
    >
      <div className="flex flex-col w-full md:flex-row justify-center gap-x-10 gap-y-16 px-2">
        <Experience />
        <AboutMe />
      </div>
    </section>
  );
};

const Section3 = ({ className = "" }: SectionProps) => {
  return (
    <section
      className={`${className} min-h-screen max-w-screen flex flex-col justify-center sticky top-0 bg-background border-t-0 sm:border-t`}
    >
      <div className="flex flex-col sm:flex-row justify-center sm:gap-x-6 w-[100%] gap-y-6 px-0 sm:px-10">
        <div className="min-h-screen sm:min-h-fit w-full sm:max-w-[600px] sm:w-1/2 flex flex-col justify-center bg-background sticky top-0 border-t sm:border-t-0">
          <TopTracks />
        </div>
        <div className="min-h-screen sm:min-h-fit w-full sm:max-w-[600px] sm:w-1/2 flex flex-col justify-center bg-background sticky top-0 border-t sm:border-t-0">
          <TopArtists />
        </div>
      </div>
    </section>
  );
};

export default function MainContent() {
  return (
    <main className="min-h-[300vh]">
      <Section1 />
      <Section2 />
      <Section3 />
    </main>
  );
}
