"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Version = "current" | "v1";

interface VersionSwitcherProps {
  currentVersion: Version;
}

export default function VersionSwitcher({
  currentVersion,
}: VersionSwitcherProps) {
  const [open, setOpen] = useState(false);

  const versions: Version[] = ["current", "v1"];
  const versionLinks: Record<Version, string> = {
    current: "/",
    v1: "/old/v1",
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setOpen(!open)}
        className="font-bold cursor-pointer"
      >
        DDD
      </button>

      {open && (
        <div
          className="absolute mt-2 w-32 rounded-md shadow-lg bg-background ring-1 z-10"
          style={{
            color: "var(--foreground)",
            boxShadow: "0 2px 10px var(--shadow)",
            borderColor: "var(--border)",
          }}
        >
          <div className="py-1">
            {versions.map((version) => (
              <Link
                key={version}
                href={versionLinks[version]}
                className={cn(
                  "block px-4 py-2 text-sm transition-colors",
                  currentVersion === version ? "font-semibold" : "opacity-80",
                  "hover:bg-[var(--pill)]"
                )}
                style={{
                  color:
                    currentVersion === version
                      ? "var(--accent)"
                      : "var(--foreground)",
                }}
                onClick={() => setOpen(false)}
              >
                {version}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
