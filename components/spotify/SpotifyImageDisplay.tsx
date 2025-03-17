import Image from "next/image";

type SpotifyImageDisplayProps = {
  imgUrl: string;
  alt: string;
};

export default function SpotifyImageDisplay({
  imgUrl,
  alt = "Spotify Image",
}: SpotifyImageDisplayProps) {
  return (
    <a
      href={imgUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:scale-90 transition-transform duration-200"
    >
      <Image
        src={imgUrl}
        alt={alt}
        width={48}
        height={48}
        className="w-12 h-12 rounded object-cover"
      />
    </a>
  );
}
