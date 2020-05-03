import React from "react";
import { useWindowWidth } from "../../hooks/windowHook";
import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";

const Header = () => {
  const width = useWindowWidth();
  if (width > 768) {
    return <DesktopHeader />;
  }
  return <MobileHeader />;
};

export default Header;
