"use client";

import { useNowPlaying } from "@/lib/hooks/useSpotify";
import SongDisplay from "@/components/spotify/SongDisplay";
import { BsSpotify } from "react-icons/bs";

export default function NowPlaying() {
  const { data, isLoading } = useNowPlaying();

  if (isLoading) {
    return (
      <div className="flex items-center space-x-4 border p-2 rounded-lg bg-header">
        {/* Skeleton for album art */}
        <div className="w-14 h-14 bg-gray-300 animate-pulse rounded-md"></div>

        {/* Skeleton for song name and artist */}
        <div className="flex flex-col space-y-2">
          <div className="w-32 h-5 bg-gray-300 animate-pulse rounded-md"></div>
          <div className="w-24 h-3 bg-gray-300 animate-pulse rounded-md"></div>
        </div>
      </div>
    );
  }

  if (!data?.isPlaying) {
    // Display "Not currently playing" with Spotify icon if nothing is playing
    return (
      <div className="flex items-center space-x-4 border p-2 rounded-lg bg-header">
        <BsSpotify className="text-4xl" />
        <p className="text-md">Not currently playing</p>
      </div>
    );
  }

  return (
    <div className="border p-2 rounded-lg bg-header">
      <SongDisplay
        title={data.title}
        songUrl={data.songUrl}
        albumImageUrl={data.albumImageUrl}
        artists={data.artists}
      />
    </div>
  );
}
