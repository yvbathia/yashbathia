import React from "react";
import { Link } from "react-router-dom";
import s from "./Header.module.scss";
import Logo from "../Logo";
import {
  HOME,
  RESUME,
  SKILLS,
  CONTACT,
  PORTFOLIO,
} from "../../constants/routes";

const Header = () => {
  let currentPath = window.location.pathname;
  return (
    <div className={s.root}>
      <div className={s.logo}>
        <Logo />
      </div>
      <div className={s.menu}>
        <div
          className={[s.item, HOME === currentPath ? s.current : ""].join(" ")}
        >
          <Link to={HOME}>About Me</Link>
        </div>
        <div
          className={[s.item, RESUME === currentPath ? s.current : ""].join(
            " "
          )}
        >
          <Link to={RESUME}>Resume</Link>
        </div>
        <div
          className={[s.item, SKILLS === currentPath ? s.current : ""].join(
            " "
          )}
        >
          <Link to={SKILLS}>Skills</Link>
        </div>
        <div
          className={[s.item, PORTFOLIO === currentPath ? s.current : ""].join(
            " "
          )}
        >
          <Link to={PORTFOLIO}>Portfolio</Link>
        </div>
        <div
          className={[s.item, CONTACT === currentPath ? s.current : ""].join(
            " "
          )}
        >
          <Link to={CONTACT}>Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
