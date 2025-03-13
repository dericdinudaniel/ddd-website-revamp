"use client";

import React, { useRef, useState } from "react";
import { Terminal } from "lucide-react";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isScrollingDown, setIsScrollingDown] = useState(true);
  const prevScrollY = useRef(0);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrollingDown(latest > prevScrollY.current);
    setIsScrolled(latest > 20);
    prevScrollY.current = latest;
  });

  const yDelay = isScrollingDown ? 0.2 : 0;
  const horizontalDelay = isScrollingDown ? 0 : 0.2;

  return (
    <div className="relative w-full">
      {/* Placeholder to maintain layout space */}
      <div className="h-16"></div>

      <motion.header
        className="fixed top-0 left-0 right-0 z-50 mx-auto backdrop-blur-lg"
        initial={false}
        animate={{
          paddingTop: isScrolled ? ".5rem" : ".5rem",
          paddingBottom: isScrolled ? ".5rem" : ".5rem",
          paddingLeft: isScrolled ? "1rem" : "1.5rem",
          paddingRight: isScrolled ? "1rem" : "1.5rem",

          width: isScrolled ? "80%" : "100%",
          borderRadius: isScrolled ? "50px" : "0px",
          boxShadow: isScrolled
            ? "0px 5px 15px var(--shadow)"
            : "0px 0px 0px rgba(0, 0, 0, 0)",
          y: isScrolled ? 10 : 10,
          backgroundColor: isScrolled ? "var(--pill)" : "var(--background)",
        }}
        transition={{
          width: {
            type: "spring",
            stiffness: 300,
            damping: 30,
            delay: horizontalDelay,
          },
          padding: {
            type: "spring",
            stiffness: 300,
            damping: 30,
            delay: horizontalDelay,
          },
          borderRadius: {
            type: "spring",
            stiffness: 300,
            damping: 30,
            delay: horizontalDelay,
          },
          boxShadow: {
            type: "spring",
            stiffness: 300,
            damping: 30,
            delay: horizontalDelay,
          },
          y: { type: "spring", stiffness: 300, damping: 30, delay: yDelay },
        }}
        style={{
          left: "50%",
          x: "-50%",
        }}
      >
        {/* Background Border */}
        <motion.div
          className="absolute inset-0 ring-[1px] ring-border rounded-[inherit]"
          initial={false}
          animate={{
            opacity: isScrolled ? 0.95 : 0,
          }}
          transition={{ duration: 0.3, delay: horizontalDelay }}
        />

        {/* Content */}
        <div className="relative z-10 flex justify-between items-center">
          <div className="flex items-center gap-x-1">
            <motion.div
              initial={false}
              animate={{
                width: isScrolled ? 35 : 45,
                height: isScrolled ? 35 : 45,
              }}
              transition={{ duration: 0.3, delay: horizontalDelay }}
            >
              <Terminal className="w-full h-full" />
            </motion.div>
            <motion.h1
              className="font-bold"
              initial={false}
              animate={{
                fontSize: isScrolled ? "1.5rem" : "2rem",
              }}
              transition={{ duration: 0.3, delay: horizontalDelay }}
              style={{
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
