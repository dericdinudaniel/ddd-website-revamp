/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useNowPlaying } from "@/lib/hooks/useSpotify";
import SongDisplay from "@/components/spotify/SongDisplay";
import { BsSpotify } from "react-icons/bs";
import { SkeletonSongDisplay } from "./Skeletons";
import { useEffect, useState } from "react";

const NowPlayingContent = ({
  isLoading,
  isPlaying,
  data,
  maxWidth,
}: {
  isLoading: boolean;
  isPlaying: boolean;
  data: any;
  maxWidth?: number;
}) => {
  if (isLoading) {
    return <SkeletonSongDisplay />;
  }

  if (!isPlaying) {
    return (
      <div className="flex items-center space-x-4">
        <BsSpotify className="text-3xl" />
        <p className="text-md">Not currently playing</p>
      </div>
    );
  }

  return (
    <div className="px-2">
      <SongDisplay
        title={data.title}
        songUrl={data.songUrl}
        albumImageUrl={data.albumImageUrl}
        artists={data.artists}
        size="small"
        maxWidth={maxWidth}
      />
    </div>
  );
};

export default function NowPlaying() {
  const { data, isLoading } = useNowPlaying();

  // State to store the dynamic maxWidth value
  const [maxWidth, setMaxWidth] = useState(400);
  useEffect(() => {
    // Function to update maxWidth based on screen size
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 1400) {
        setMaxWidth(screenWidth * 0.5);
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
        setMaxWidth(screenWidth * 0.65);
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

  return (
    <div
      className="p-2 px-4 rounded-lg"
      // style={{ boxShadow: "0px 5px 15px var(--shadow)" }}
    >
      {/* <div className="absolute inset-0 ring-[1px] ring-border rounded-[inherit]" /> */}
      <NowPlayingContent
        isLoading={isLoading}
        isPlaying={!!data?.isPlaying}
        data={data}
        maxWidth={maxWidth}
      />
    </div>
  );
}
