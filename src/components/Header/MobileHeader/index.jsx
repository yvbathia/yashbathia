import React from "react";
import { Link } from "react-router-dom";
import s from "./MobileHeader.module.scss";
import Logo from "../../Logo";
import { HOME, RESUME, CONTACT, PORTFOLIO } from "../../../constants/routes";
import { ReactComponent as Menu } from "../../../images/menu.svg";
import { useState } from "react";

const MobileHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className={s.root}>
      <div className={s.container}>
        <div className={s.logo}>
          <Logo />
        </div>
        <div className={s.menuIcon} onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <span>X</span> : <Menu />}
        </div>
      </div>
      {isMenuOpen && (
        <div className={s.menuHead}>
          <div className={s.menu}>
            <div className={s.item}>
              <Link className={s.link} to={HOME}>
                About Me
              </Link>
            </div>
            <div className={s.item}>
              <Link className={s.link} to={RESUME}>
                Resume
              </Link>
            </div>
            <div className={s.item}>
              <Link className={s.link} to={PORTFOLIO}>
                Portfolio
              </Link>
            </div>
            <div className={s.item}>
              <Link className={s.link} to={CONTACT}>
                Contact
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileHeader;
