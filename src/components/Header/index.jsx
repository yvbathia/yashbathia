import React from "react";
import PropTypes from "prop-types";
import s from "./Header.module.scss";
import Profile from "../../images/profile.svg";
import { ReactComponent as Fb } from "../../images/fb.svg";
import { ReactComponent as Linkedin } from "../../images/linkedin.svg";
import { ReactComponent as Github } from "../../images/github.svg";

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
            <div className={s.title}>
              <div className={s.name}>
                <h1>Yash Bathia</h1>
              </div>
              <div className={s.subTitle}>Developer</div>
            </div>
            <div className={s.social}>
              <a
                className={s.icon}
                href="https://www.facebook.com/yashbathia"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Fb />
              </a>
              <a
                className={s.icon}
                href="https://www.linkedin.com/in/yash-bathia/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin />
              </a>
              <a
                className={s.icon}
                href="https://github.com/yvbathia"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github />
              </a>
            </div>
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
