/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useNowPlaying } from "@/lib/hooks/useSpotify";
import SongDisplay from "@/components/spotify/SongDisplay";
import { BsSpotify } from "react-icons/bs";

const NowPlayingContent = ({
  isLoading,
  isPlaying,
  data,
}: {
  isLoading: boolean;
  isPlaying: boolean;
  data: any;
}) => {
  if (isLoading) {
    return (
      <div className="flex items-center space-x-4">
        <div className="w-14 h-14 bg-gray-300 animate-pulse rounded-md"></div>
        <div className="flex flex-col space-y-2">
          <div className="w-32 h-5 bg-gray-300 animate-pulse rounded-md"></div>
          <div className="w-24 h-3 bg-gray-300 animate-pulse rounded-md"></div>
        </div>
      </div>
    );
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
    <SongDisplay
      title={data.title}
      songUrl={data.songUrl}
      albumImageUrl={data.albumImageUrl}
      artists={data.artists}
    />
  );
};

export default function NowPlaying() {
  const { data, isLoading } = useNowPlaying();

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
      />
    </div>
  );
}
