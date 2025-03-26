/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useTopTracks } from "@/lib/hooks/useSpotify";
import SongDisplay from "@/components/spotify/SongDisplay";
import { SkeletonSongDisplay } from "./Skeletons";
import { useState, useEffect } from "react";

export default function TopTracks() {
  const { data, isLoading } = useTopTracks();

  // State to store the dynamic maxWidth value
  const [maxWidth, setMaxWidth] = useState(400);
  useEffect(() => {
    // Function to update maxWidth based on screen size
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 1400) {
        setMaxWidth(screenWidth * 0.45);
      } else if (screenWidth >= 1280) {
        setMaxWidth(screenWidth * 0.45);
      } else if (screenWidth >= 1024) {
        setMaxWidth(screenWidth * 0.4);
      } else if (screenWidth >= 1024) {
        setMaxWidth(screenWidth * 0.37);
      } else if (screenWidth >= 640) {
        setMaxWidth(screenWidth * 0.345);
      } else {
        // mobile
        setMaxWidth(screenWidth * 0.75);
      }
    };
    // Initial call to set maxWidth
    handleResize();
    // Add resize event listener
    window.addEventListener("resize", handleResize);
    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (isLoading) {
    return (
      <>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {Array.from({ length: 10 }).map((_, index) => (
            <SkeletonSongDisplay key={index} />
          ))}
        </div>
      </>
    );
  }

  return (
    <div className="flex flex-col items-center space-y-3">
      <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl font-header w-max">
        Top Tracks
      </h2>
      <div className="grid grid-cols-1 gap-4 w-max">
        {data.map((track: any) => (
          <SongDisplay
            key={track.songUrl}
            title={track.title}
            songUrl={track.songUrl}
            albumImageUrl={track.albumImageUrl}
            artists={track.artists}
            maxWidth={maxWidth}
          />
        ))}
      </div>
    </div>
  );
}
