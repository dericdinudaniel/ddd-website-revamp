import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

type ScrollingTextProps = {
  children: React.ReactNode;
  href?: string;
  maxWidth?: number;
  pauseDuration?: number;
  scrollSpeed?: number;
  className?: string;
};

export default function ScrollingText({
  children,
  maxWidth = 200,
  pauseDuration = 1,
  scrollSpeed = 20,
  className = "",
}: ScrollingTextProps) {
  const textRef = useRef<HTMLDivElement>(null);
  const [shouldScroll, setShouldScroll] = useState(false);

  useEffect(() => {
    if (textRef.current) {
      setShouldScroll(textRef.current.scrollWidth > maxWidth);
    }
  }, [children, maxWidth]);

  const content = shouldScroll ? (
    <motion.div
      className={`block ${className}`}
      ref={textRef}
      animate={{
        x: [
          0,
          -Math.max(0, (textRef.current?.scrollWidth ?? 0) - maxWidth),
          -Math.max(0, (textRef.current?.scrollWidth ?? 0) - maxWidth),
          0,
          0,
        ],
      }}
      transition={{
        repeat: Infinity,
        duration:
          (Math.max(0, (textRef.current?.scrollWidth ?? 0) - maxWidth) /
            scrollSpeed) *
            2 +
          2 * pauseDuration,
        ease: "linear",
        times: [0, 0.4, 0.6, 1],
      }}
    >
      {children}
    </motion.div>
  ) : (
    <div className={`block ${className}`} ref={textRef}>
      {children}
    </div>
  );

  return (
    <div
      className="overflow-hidden whitespace-nowrap relative"
      style={{ maxWidth }}
    >
      {content}
    </div>
  );
}
