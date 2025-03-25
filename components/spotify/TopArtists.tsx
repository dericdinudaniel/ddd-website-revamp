/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useTopArtists } from "@/lib/hooks/useSpotify";
import ArtistDisplay from "@/components/spotify/ArtistDisplay";
import { SkeletonArtistDisplay } from "./Skeletons";

export default function TopArtists() {
  const { data, isLoading } = useTopArtists();

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
