import React from "react";
import s from "./Header.module.scss";
import Logo from "../Logo";

const Header = () => {
  return (
    <div className={s.root}>
      <div className={s.logo}>
        <Logo />
      </div>
      <div className={s.menu}>
        <div className={s.item}>About Me</div>
        <div className={s.item}>Resume</div>
        <div className={s.item}>Skills</div>
        <div className={s.item}>Portfolio</div>
        <div className={s.item}>Contact</div>
      </div>
    </div>
  );
};

export default Header;
