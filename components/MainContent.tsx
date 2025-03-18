import React from "react";
import TopTracks from "./spotify/TopTracks";
import TopArtists from "./spotify/TopArtists";

export default function MainContent() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-start overflow-auto">
      <div className="flex flex-col justify-center items-center text-center h-screen w-screen">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold">
          Deric Dinu Daniel
        </h1>
        <p className="text-md sm:text-lg md:text-lg lg:text-xl xl:text-2xl">
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
