import React, { useState } from "react";
import Logo from "./header/Logo";
import Search from "./header/Search";
import Auth from "./header/Auth";

function Header() {
  const [isUser, setIsUser] = useState(false);

  return (
    <>
      <Logo />
      <Search />
      <Auth />
    </>
  );
}

export default Header;
