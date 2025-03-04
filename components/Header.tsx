"use client";

import { useState, useEffect } from "react";
import { Terminal } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  // Transform values for smooth animation
  const headerPadding = useTransform(scrollY, [0, 50], ["1rem", "0.75rem"]);
  const headerBorderRadius = useTransform(scrollY, [0, 50], ["0px", "9999px"]);
  const headerWidth = useTransform(scrollY, [0, 50], ["100%", "85%"]);
  const headerOpacity = useTransform(scrollY, [0, 50], [0, 0.95]);
  const headerShadow = useTransform(
    scrollY,
    [0, 50],
    ["0px 0px 0px rgba(0, 0, 0, 0)", "0px 5px 15px rgba(0, 0, 0, 0.1)"]
  );

  useEffect(() => {
    const unsubscribe = scrollY.onChange((latest) => {
      if (latest > 20) {
        if (!isScrolled) setIsScrolled(true);
      } else {
        if (isScrolled) setIsScrolled(false);
      }
    });

    return () => unsubscribe();
  }, [scrollY, isScrolled]);

  return (
    <div className="relative w-full">
      {/* This is a placeholder div to maintain layout space */}
      <div className="h-16"></div>

      <motion.header
        className="fixed top-0 left-0 right-0 z-50 mx-auto backdrop-blur-sm"
        style={{
          padding: headerPadding,
          borderRadius: headerBorderRadius,
          width: headerWidth,
          boxShadow: headerShadow,
          left: "50%",
          x: "-50%",
        }}
        initial={{ y: 0 }}
        animate={{
          y: isScrolled ? 16 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
        }}
      >
        {/* Background element with Tailwind classes */}
        <motion.div
          className="absolute inset-0 bg-background rounded-[inherit]"
          style={{ opacity: headerOpacity }}
        />

        {/* Content */}
        <div className="relative z-10 flex justify-between items-center">
          <div className="flex items-center gap-x-0.5">
            <Terminal size={32} />
            <h1 className="text-2xl font-bold">DDD</h1>
          </div>
          <ThemeSwitcher />
        </div>
      </motion.header>
    </div>
  );
}
