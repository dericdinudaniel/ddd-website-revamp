import SpotifyImageDisplay from "./SpotifyImageDisplay";

type SongDisplayProps = {
  title: string;
  songUrl: string;
  albumImageUrl: string;
  artists: { name: string; url: string }[];
  size?: "small" | "medium" | "large";
};

export default function SongDisplay({
  title,
  songUrl,
  albumImageUrl,
  artists,
  size = "medium",
}: SongDisplayProps) {
  return (
    <div className="flex items-center space-x-4">
      <SpotifyImageDisplay imgUrl={albumImageUrl} alt={title} size={size} />
      <div className="flex flex-col">
        <a
          href={songUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg font-bold hover:underline text-left"
        >
          {title}
        </a>
        <div className="text-sm text-gray-500 text-left">
          {artists.map((artist, index) => (
            <span key={artist.url}>
              <a
                href={artist.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {artist.name}
              </a>
              {index < artists.length - 1 && ", "}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
