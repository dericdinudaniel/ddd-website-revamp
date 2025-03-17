import SpotifyImageDisplay from "./SpotifyImageDisplay";

type ArtistDisplayProps = {
  name: string;
  url: string;
  imageUrl: string;
};

export default function ArtistDisplay({
  name,
  url,
  imageUrl,
}: ArtistDisplayProps) {
  return (
    <div className="flex items-center space-x-4">
      <SpotifyImageDisplay imgUrl={imageUrl} alt={name} />
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-lg font-bold hover:underline text-left"
      >
        {name}
      </a>
    </div>
  );
}
