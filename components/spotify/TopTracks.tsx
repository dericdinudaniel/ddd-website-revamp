/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useTopTracks } from "@/lib/hooks/useSpotify";
import SongDisplay from "@/components/spotify/SongDisplay";
import { SkeletonSongDisplay } from "./Skeletons";

export default function TopTracks() {
  const { data, isLoading } = useTopTracks();

  if (isLoading) {
    return (
      <>
        <div className="grid grid-cols-2 gap-4">
          {Array.from({ length: 10 }).map((_, index) => (
            <SkeletonSongDisplay key={index} />
          ))}
        </div>
      </>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-4">
      {data.map((track: any) => (
        <SongDisplay
          key={track.songUrl}
          title={track.title}
          songUrl={track.songUrl}
          albumImageUrl={track.albumImageUrl}
          artists={track.artists}
          maxWidth={400}
        />
      ))}
    </div>
  );
}
