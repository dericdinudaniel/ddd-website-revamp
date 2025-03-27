import React, { JSX } from "react";
import Image from "next/image";

interface Company {
  name: string;
  site: string;
  logo: () => JSX.Element;
  position: string;
}

const companyImageClasses = "";

const companies: Company[] = [
  {
    name: "Apple – Silicon Engineering Group",
    site: "https://www.apple.com",
    logo: () => {
      return (
        <div className="size-6 sm:size-8 md:size-12 flex items-center justify-center">
          <a href={"https://www.apple.com"} target="_blank">
            <Image
              src="/company-logos/apple-logo.svg"
              alt="Apple"
              height={80}
              width={80}
              className={companyImageClasses + "dark:invert"}
            />
          </a>
        </div>
      );
    },
    position: "Incoming SoC Embedded Software Engineer",
  },
  {
    name: "Microsoft – Data Security & Privacy",
    site: "https://www.microsoft.com",
    logo: () => {
      return (
        <div className="size-6 sm:size-8 md:size-12 flex items-center justify-center">
          <a href={"https://www.microsoft.com"} target="_blank">
            <Image
              src="/company-logos/microsoft-logo.svg"
              alt="Microsoft"
              height={80}
              width={80}
              className={companyImageClasses}
            />
          </a>
        </div>
      );
    },
    position: "Software Engineering Intern",
  },
  {
    name: "Bose – Research",
    site: "https://www.bose.com",
    logo: () => {
      return (
        <div className="size-14 sm:size-18 md:size-24 flex items-center justify-center">
          <a href={"https://www.bose.com"} target="_blank">
            <Image
              src="/company-logos/bose-logo.svg"
              alt="Bose Logo"
              height={80}
              width={80}
              className={companyImageClasses + "dark:hidden"}
            />
            <Image
              src="/company-logos/bose-logo.svg"
              alt="Bose Logo"
              height={80}
              width={80}
              className={
                companyImageClasses + "hidden dark:block filter invert"
              }
            />
          </a>
        </div>
      );
    },
    position: "Systems Software Engineering Intern",
  },
  {
    name: "Shade",
    site: "https://www.shade.inc",
    logo: () => {
      return (
        <div className="size-12 sm:size-16 md:size-20 flex items-center justify-center">
          <a href={"https://www.shade.inc"} target="_blank">
            <Image
              src="/company-logos/shade-logo.svg"
              alt="Shade Logo"
              height={80}
              width={80}
              className={companyImageClasses}
            />
          </a>
        </div>
      );
    },
    position: "Audio/Music Production Consultant",
  },
  {
    name: "Siemens – Digital Industries SW",
    site: "https://www.sw.siemens.com/en-US/",
    logo: () => {
      return (
        <div className="size-12 sm:size-16 md:size-20 flex items-center justify-center">
          <a href={"https://www.sw.siemens.com/en-US/"} target="_blank">
            <Image
              src="/company-logos/siemens-logo.svg"
              alt="Siemens Logo"
              height={80}
              width={80}
              className={companyImageClasses}
            />
          </a>
        </div>
      );
    },
    position: "Software Engineering Intern",
  },
];

const Experience = () => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-4xl sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-6xl font-header">
        Experience
      </h2>
      <div className="max-w-4xl mx-auto px-1.5">
        {companies.map((company) => (
          <div key={company.name} className="flex items-center gap-x-2">
            <div className="flex-shrink-0 size-12 sm:size-14 md:size-20 flex items-center justify-center">
              {company.logo()}
            </div>
            <div>
              <a
                className="font-semibold underline-fade text-base sm:text-xl md:text-xl xl:text-2xl break-words hover:underline"
                href={company.site}
                target="_blank"
              >
                {company.name}
              </a>
              <h3 className="text-xs sm:text-base md:text-sm xl:text-base text-muted">
                {company.position}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
