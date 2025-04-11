"use client";

import React from "react";
import Logo from "./Logo";
import ThemeSwitcher from "./ThemeSwitcher";

const NavBar = () => {
  return (
    <>
      <nav className="flex justify-between mx-8">
        <Logo className="flex self-center" />
        <ThemeSwitcher className=" self-center" />
      </nav>
    </>
  );
};

export default NavBar;
