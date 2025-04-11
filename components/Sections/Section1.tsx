"use client";

import Section from "./Section";
import SocialLinks from "../SocialLinks";
import { SlideFadeIn } from "../SlideFadeIn";

type SectionProps = {
  className?: string;
};

const Section1 = ({ className = "" }: SectionProps) => {
  return (
    <Section className={className}>
      <SlideFadeIn>
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-9xl font-bold font-header tracking-[.1rem]">
          Deric Dinu Daniel
        </h1>
      </SlideFadeIn>
      <div className="text-xs sm:text-base md:text-lg lg:text-xl xl:text-2xl flex gap-3">
        <SlideFadeIn slideOffset={20}>Software Engineer.</SlideFadeIn>
        <SlideFadeIn slideOffset={20}>Music Producer.</SlideFadeIn>
      </div>
      <SocialLinks />
    </Section>
  );
};

export default Section1;
