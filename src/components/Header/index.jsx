import React from "react";
import PropTypes from "prop-types";
import s from "./Header.module.scss";
import Profile from "../../images/profile.svg";

const propType = {
  children: PropTypes.node.isRequired
};

const Header = ({ children }) => (
  <div className={s.root}>
    <div className={s.container}>
      <div className={s.innerContainer}>
        <div className={s.head}>
          <div className={s.nav}>
            {/* <div>About</div>
            <div>Contact</div>
            <div>Skills</div> */}
          </div>
          <div className={s.imgContainer}>
            <img className={s.img} src={Profile} alt="img" />
          </div>
        </div>
        <div className={s.details}>
          <div className={s.detail}>
            <div className={s.child}>{children}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

Header.propType = propType;
export default Header;
