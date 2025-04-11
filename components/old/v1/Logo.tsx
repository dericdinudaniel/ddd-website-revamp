import React from "react";
import NameVersionSelector from "@/components/NameVersionSelector";

interface LogoProps {
  className?: string;
}

const Logo = ({ className }: LogoProps) => {
  return (
    <div>
      <div className={className}>
        <svg
          className={"self-center stroke-slate-900 dark:stroke-slate-100"}
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="4 17 10 11 4 5"></polyline>
          <line x1="12" y1="19" x2="20" y2="19"></line>
        </svg>
        <h1 className="text-3xl ml-2 self-center font-jetbrains_mono">
          <NameVersionSelector currentVersion="v1" />
        </h1>
      </div>
    </div>
  );
};

export default Logo;
