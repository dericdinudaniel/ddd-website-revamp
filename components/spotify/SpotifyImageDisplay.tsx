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
        width={640}
        height={640}
        className="w-14 h-14 rounded object-cover"
      />
    </a>
  );
}
