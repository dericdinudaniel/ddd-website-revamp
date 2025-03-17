import React from "react";
import SpotifyNowPlaying from "./spotify/NowPlaying";

export default function Footer() {
  return (
    <>
      <footer className="fixed bottom-0 w-full p-4 text-center">
        <div className="flex items-center justify-center">
          <SpotifyNowPlaying />
        </div>
      </footer>
    </>
  );
}
