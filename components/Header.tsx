"use client";

import React from "react";
import { Terminal } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Header() {
  const { scrollY } = useScroll();

  // Width shrinks first
  const headerWidth = useTransform(scrollY, [0, 30], ["100%", "80%"]);

  // Y offset happens after width scaling
  const headerY = useTransform(scrollY, [30, 50], [0, 16]);

  // Other transforms stay the same
  const headerPadding = useTransform(scrollY, [30, 50], ["1rem", "0.5rem"]);
  const headerBorderRadius = useTransform(scrollY, [30, 50], ["10px", "50px"]);
  const headerBorderOpacity = useTransform(scrollY, [30, 50], [0, 0.95]);
  const headerShadow = useTransform(
    scrollY,
    [30, 50],
    ["0px 0px 0px rgba(0, 0, 0, 0)", "0px 5px 15px rgba(0, 255, 0, 0.5)"]
  );

  const textSize = useTransform(scrollY, [30, 50], ["2rem", "1.5rem"]);
  const iconSize = useTransform(scrollY, [30, 50], [45, 35]);

  return (
    <div className="relative w-full">
      {/* This is a placeholder div to maintain layout space */}
      <div className="h-16"></div>

      <motion.header
        className="fixed top-0 left-0 right-0 z-50 mx-auto backdrop-blur-lg"
        style={{
          padding: headerPadding,
          borderRadius: headerBorderRadius,
          width: headerWidth,
          boxShadow: headerShadow,
          y: headerY,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
        }}
      >
        {/* Background element with Tailwind classes */}
        <motion.div
          className="absolute inset-0 ring-[1px] ring-border rounded-[inherit]"
          style={{ opacity: headerBorderOpacity }}
        />

        {/* Content */}
        <div className="relative z-10 flex justify-between items-center">
          <div className="flex items-center gap-x-1">
            <motion.div style={{ width: iconSize, height: iconSize }}>
              <Terminal className="w-full h-full" />
            </motion.div>
            <motion.h1
              className="font-bold"
              style={{
                fontSize: textSize,
                lineHeight: 1.2,
              }}
            >
              DDD
            </motion.h1>
          </div>
          <ThemeSwitcher />
        </div>
      </motion.header>
    </div>
  );
}
