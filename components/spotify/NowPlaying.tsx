"use client";

import { useNowPlaying } from "@/lib/hooks/useSpotify";
import SongDisplay from "@/components/spotify/SongDisplay";

export default function NowPlaying() {
  const { data, isLoading } = useNowPlaying();

  if (isLoading) return <p>Loading...</p>;
  if (!data?.isPlaying) return <p>Not playing anything.</p>;

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
