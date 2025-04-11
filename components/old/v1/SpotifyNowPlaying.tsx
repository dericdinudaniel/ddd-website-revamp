"use client";

import { BsSpotify } from "react-icons/bs";
import React from "react";

export default function SpotifyNowPlaying() {
  return (
    <div className="md:pb-4 pb-2">
      <div className="flex items-center pb-1">
        <BsSpotify size={40} />
        <p className="pl-4">Not Playing</p>
        <p className="px-2">{" — "}</p>
        <p>Spotify</p>
      </div>
    </div>
  );
}

// return (
//   <div className="flex md:flex-row  md:justify-normal justify-between items-center md:pb-4 pb-2">
//     <div className="flex items-center">
//       {data?.albumImageUrl && (
//         <Image
//           src={data.albumImageUrl}
//           alt="Album Art"
//           className="rounded-2xl md:mr-4 h-16 w-16"
//           height={64}
//           width={64}
//         />
//       )}
//       {data?.songUrl ? (
//         <div className="md:block hidden">
//           <AnimatedBars />
//         </div>
//       ) : (
//         <BsSpotify size={40} />
//       )}
//     </div>
//     <div className="flex md:flex-row flex-col md:pl-4">
//       {data?.songUrl ? (
//         <a
//           className="text-gray-800 dark:text-gray-200  underline-fade"
//           href={data.songUrl}
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <p className="font-medium">{data.title}</p>
//         </a>
//       ) : (
//         <p>Not playing</p>
//       )}
//       <p className="md:px-2 hidden md:block">{" — "}</p>

//       {data?.artists ? (
//         <div className="flex items-center sm:flex-row">
//           {data?.artists?.map((artist, index, array) => (
//             <React.Fragment key={artist.url}>
//               <a
//                 className="text-gray-800 dark:text-gray-200 underline-fade"
//                 href={artist.url}
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <p className="md:pl-1 max-w-max md:text-base text-sm">
//                   {artist.name}
//                   {index < array.length - 1 && (
//                     <>
//                       <span className="hidden md:inline-block">,&nbsp;</span>
//                       <span className="md:hidden">,</span>
//                     </>
//                   )}
//                 </p>
//               </a>
//             </React.Fragment>
//           ))}
//         </div>
//       ) : (
//         <p>Spotify</p>
//       )}
//     </div>
//   </div>
// );

// <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-slate-900 dark:group-hover:border-slate-100 transition duration-[400ms] pointer-events-none"></div>
