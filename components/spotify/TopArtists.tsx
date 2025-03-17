"use client";

import { useTopArtists } from "@/lib/hooks/useSpotify";
import ArtistDisplay from "@/components/spotify/ArtistDisplay";

export default function TopArtists() {
  const { data, isLoading } = useTopArtists();

  if (isLoading) return <p>Loading...</p>;

  console.log(data);

  return (
    <div className="grid grid-cols-2 gap-4">
      {data.map((artist: any) => (
        <ArtistDisplay
          key={artist.name}
          name={artist.name}
          url={artist.artistUrl}
          imageUrl={artist.imageUrl}
        />
      ))}
    </div>
  );
}
