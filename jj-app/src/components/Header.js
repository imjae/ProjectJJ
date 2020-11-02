import React, { useState } from "react";
import Logo from "./header/Logo";
import Search from "./header/Search";
import Auth from "./header/Auth";

function Header({ isLogged }) {
  return (
    <>
      <header>
        <Logo />
        <Search />
        <Auth />
      </header>
    </>
  );
}

export default Header;
