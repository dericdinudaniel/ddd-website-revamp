/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useTopArtists } from "@/lib/hooks/useSpotify";
import ArtistDisplay from "@/components/spotify/ArtistDisplay";
import { SkeletonArtistDisplay } from "./Skeletons";
import { useEffect, useState } from "react";

export default function TopArtists() {
  const { data, isLoading } = useTopArtists();

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
        setMaxWidth(screenWidth * 0.45);
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
        <div className="grid grid-cols-2 gap-4">
          {Array.from({ length: 10 }).map((_, index) => (
            <SkeletonArtistDisplay key={index} />
          ))}
        </div>
      </>
    );
  }

  return (
    <div className="flex flex-col items-center space-y-3">
      <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl font-header w-max">
        Top Artists
      </h2>
      <div className="grid grid-cols-1 gap-4">
        {data.map((artist: any) => (
          <ArtistDisplay
            key={artist.name}
            name={artist.name}
            url={artist.artistUrl}
            imageUrl={artist.imageUrl}
            maxWidth={maxWidth}
          />
        ))}
      </div>
    </div>
  );
}
