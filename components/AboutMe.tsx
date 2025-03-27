import React from "react";

const AboutMe = () => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-4xl sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-6xl font-header">
        About Me
      </h2>

      <div className="w-95 sm:w-120 md:w-70 lg:w-100 2xl:lg:w-120 text-sm sm:text-base md:text-base lg:text-xl">
        <p>
          I&apos;m a software engineer & music producer based in Ann Arbor, MI.
        </p>
        <p>
          I&apos;m interested in a lot of software such as low-level systems
          from chip design, OS, embedded, distributed/backend.
        </p>
        <p>I&apos;m also into audio SW & ML.</p>
        <p>Despite the beauty of this website, I&apos;m not a frontend dev.</p>
      </div>
    </div>
  );
};

export default AboutMe;
