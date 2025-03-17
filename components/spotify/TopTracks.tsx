"use client";

import { useTopTracks } from "@/lib/hooks/useSpotify";
import SongDisplay from "@/components/spotify/SongDisplay";

export default function TopTracks() {
  const { data, isLoading } = useTopTracks();

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="grid grid-cols-2 gap-4">
      {data.map((track: any) => (
        <SongDisplay
          key={track.songUrl}
          title={track.title}
          songUrl={track.songUrl}
          albumImageUrl={track.albumImageUrl}
          artists={track.artists}
        />
      ))}
    </div>
  );
}
