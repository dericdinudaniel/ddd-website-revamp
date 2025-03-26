import React from "react";

const AboutMe = () => {
  return (
    <div className="flex flex-col items-center w-1/2">
      <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl font-header w-max">
        About Me
      </h2>

      <div className="w-104 md:w-115 text-sm md:text-lg text-center mt-0 lg:mt-3">
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
