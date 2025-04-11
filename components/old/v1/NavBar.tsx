"use client";

import React from "react";
import { useTheme } from "next-themes";
import Logo from "./Logo";
import ThemeSwitcher from "./ThemeSwitcher";

const NavBar = () => {
  const { resolvedTheme, theme, systemTheme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <>
      <nav className="flex justify-between mx-8">
        <Logo className="flex self-center" currentTheme={currentTheme} />
        <ThemeSwitcher className=" self-center" />
      </nav>
    </>
  );
};

export default NavBar;
