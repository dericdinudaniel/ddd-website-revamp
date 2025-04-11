import { useRef, useEffect, ReactNode } from "react";
import { motion, useAnimation, useInView } from "motion/react";

type MarginValue = `${number}${"px" | "%"}`;
type SlideDirection = "left" | "right";

export function SlideFadeIn({
  index,
  children,
  delay = 0.05,
  inMargin = "-50px",
  outMargin = "-80px",
  direction = "left",
}: {
  children: ReactNode;
  index: number;
  delay?: number;
  inMargin?: string;
  outMargin?: string;
  direction?: SlideDirection;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin:
      `${inMargin} 0px ${outMargin} 0px` as `${MarginValue} ${MarginValue} ${MarginValue} ${MarginValue}`,
    once: false,
  });

  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  const offsetX = direction === "right" ? 50 : -50;

  const animationVariants = {
    hidden: { opacity: 0, x: offsetX, filter: "blur(8px)" },
    visible: { opacity: 1, x: 0, filter: "blur(0px)" },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.5, delay: index * delay }}
      variants={animationVariants}
      style={{ willChange: "transform, opacity, filter" }}
    >
      {children}
    </motion.div>
  );
}
