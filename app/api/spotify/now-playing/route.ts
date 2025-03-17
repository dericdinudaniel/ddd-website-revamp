import { NextResponse } from "next/server";
import { getNowPlaying } from "@/lib/spotify";

export async function GET() {
  const response = await getNowPlaying();
  if (!response.ok) {
    return NextResponse.json({ isPlaying: false }, { status: 200 });
  }

  const song = await response.json();

  return NextResponse.json({
    isPlaying: song.is_playing,
    title: song.item?.name,
    songUrl: song.item?.external_urls?.spotify,
    album: song.item?.album?.name,
    albumImageUrl: song.item?.album?.images?.[0]?.url,
    artists: song.item?.artists?.map((artist: any) => ({
      name: artist.name,
      url: artist.external_urls.spotify,
    })),
  });
}
