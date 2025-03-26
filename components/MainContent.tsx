import React from "react";
import TopTracks from "@/components/spotify/TopTracks";
import TopArtists from "@/components/spotify/TopArtists";
import Experience from "@/components/Experience";
import AboutMe from "@/components/AboutMe";

const Page1 = () => {
  return (
    <div className="min-h-screen w-screen flex flex-col justify-center items-center text-center">
      <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-9xl font-bold font-header tracking-[.1rem]">
        Deric Dinu Daniel
      </h1>
      <p className="text-xs sm:text-base md:text-lg lg:text-xl xl:text-2xl">
        Software Engineer. Music Producer.
      </p>
    </div>
  );
};

const Page2 = () => {
  return (
    <div className="min-h-screen w-screen flex items-center justify-center overflow-hidden">
      <div className="flex flex-col items-center w-fit justify-center lg:flex-row gap-y-3">
        <Experience />
        <AboutMe />
      </div>
    </div>
  );
};

const Page3 = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <div className="flex flex-col sm:flex-row sm:justify-center sm:gap-x-6 w-[100%] gap-y-6 px-10">
        <div className="w-full sm:w-1/2 max-w-[600px] flex justify-center">
          <TopTracks />
        </div>
        <div className="w-full sm:w-1/2 max-w-[600px] flex justify-center">
          <TopArtists />
        </div>
      </div>
    </div>
  );
};

export default function MainContent() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-start w-full overflow-auto">
      <Page1 />
      <Page2 />
      <Page3 />

      {/* create space for footer at the bottom for sm and smaller */}
      <div className="h-20 sm:hidden"></div>
    </main>
  );
}
