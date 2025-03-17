import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const useNowPlaying = () =>
  useSWR("/api/spotify/now-playing", fetcher, {
    // refreshInterval: 5000, // Refresh every 5 seconds
    // revalidateOnFocus: true, // Refetch on window focus
  });

export const useTopTracks = () => useSWR("/api/spotify/top-tracks", fetcher);

export const useTopArtists = () => useSWR("/api/spotify/top-artists", fetcher);
