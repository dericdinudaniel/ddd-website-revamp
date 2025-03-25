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
        setMaxWidth(screenWidth * 0.39);
      } else if (screenWidth >= 1024) {
        setMaxWidth(screenWidth * 0.35);
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
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
  );
}
