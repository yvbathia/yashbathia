import React from "react";
import PropTypes from "prop-types";
import s from "./Header.module.scss";
import { Link } from "react-router-dom";

const propType = {
  children: PropTypes.node.isRequired
};

const Header = ({ children }) => (
  <div className={s.root}>
    <div className={s.header}>
      <div className={s.left}>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          YASH BATHIA
        </Link>
      </div>

      <div className={s.right}>
        <div className={s.skills}>
          <Link
            to="/skills"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            SKILLS
          </Link>
        </div>
        <div className={s.about}>
          <Link
            to="/resume"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            RESUME
          </Link>
        </div>
        <div className={s.skills}>
          <Link
            to="/contact"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            CONTACT
          </Link>
        </div>
      </div>
    </div>
    <div className={s.children}>{children}</div>
  </div>
);

Header.propType = propType;
export default Header;
