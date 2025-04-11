/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useTopArtists } from "@/lib/hooks/useSpotify";
import ArtistDisplay from "@/components/spotify/ArtistDisplay";
import { SkeletonArtistDisplay } from "./Skeletons";
import { memo } from "react";
import { SlideFadeIn } from "../SlideFadeIn";
import { useResponsiveMaxWidth } from "@/lib/hooks/useResponsiveWidth";

const breakpoints = [0.5, 0.39, 0.35, 0.345, 0.65];
const MemoizedArtistDisplay = memo(ArtistDisplay);

export default function TopArtists() {
  const { data, isLoading } = useTopArtists();

  const maxWidth = useResponsiveMaxWidth(breakpoints);

  if (isLoading) {
    return (
      <div className="grid grid-cols-2 gap-4">
        {Array.from({ length: 10 }).map((_, index) => (
          <SkeletonArtistDisplay key={index} />
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center space-y-3">
      <h2 className="text-4xl sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-6xl font-header">
        Top Artists
      </h2>
      <div className="mt-3 grid grid-cols-1 gap-2">
        {data.map((artist: any, index: number) => (
          <SlideFadeIn
            key={artist.name}
            index={index}
            direction={window.innerWidth >= 640 ? "right" : "left"}
            delay={0.03}
          >
            <MemoizedArtistDisplay
              name={artist.name}
              url={artist.artistUrl}
              imageUrl={artist.imageUrl}
              maxWidth={maxWidth}
            />
          </SlideFadeIn>
        ))}
      </div>
    </div>
  );
}
