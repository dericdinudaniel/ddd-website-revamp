import { FileUser, Github, Linkedin, Mail } from "lucide-react";
import React from "react";

const socials = [
  {
    name: "GitHub",
    icon: Github,
    link: "https://github.com/dericdinudaniel",
  },
  {
    name: "Email",
    icon: Mail,
    link: "mailto:dericdd@umich.edu",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    link: "https://www.linkedin.com/in/dericdinudaniel/",
  },
  {
    name: "Resume",
    icon: FileUser,
    link: "/resume/Deric_Dinu_Daniel_Resume.pdf",
  },
];

const SocialLinks = () => {
  return (
    <div className="mt-2 lg:mt-3 xl:mt-4 flex gap-x-8">
      {socials.map(({ name, icon: Icon, link }) => (
        <a
          key={name}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={name}
        >
          <Icon className="size-5 md:size-6 xl:size-8" />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
