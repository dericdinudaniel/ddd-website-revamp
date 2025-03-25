import React from "react";
import TopTracks from "./spotify/TopTracks";
import TopArtists from "./spotify/TopArtists";

export default function MainContent() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-start overflow-auto">
      <div className="flex flex-col justify-center items-center text-center h-screen w-full">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-9xl font-bold font-header">
          Deric Dinu Daniel
        </h1>
        <p className="text-xs sm:text-base md:text-lg lg:text-xl xl:text-2xl">
          Software Engineer. Music Producer.
        </p>
      </div>
      <div className="space-y-20">
        <TopTracks />
        <TopArtists />
      </div>
      <div className="h-24" />
    </main>
  );
}
