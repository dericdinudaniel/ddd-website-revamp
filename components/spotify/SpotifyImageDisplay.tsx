import Image from "next/image";

type SpotifyImageDisplayProps = {
  imgUrl: string;
  alt: string;
  size?: "small" | "medium" | "large";
};

const sizeClasses = {
  small: "size-10 lg:size-12",
  medium: "size-12 lg:size-14",
  large: "size-18 lg:size-20",
};

export default function SpotifyImageDisplay({
  imgUrl,
  alt = "Spotify Image",
  size = "medium",
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
        className={`${sizeClasses[size]} rounded object-cover`}
      />
    </a>
  );
}
