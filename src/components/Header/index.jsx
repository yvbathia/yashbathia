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
        <Link
          className={s.links}
          to="/skills"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          SKILLS
        </Link>

        <Link
          className={s.links}
          to="/resume"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          RESUME
        </Link>

        <Link
          className={[s.links, s.btn].join(" ")}
          to="/contact"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          CONTACT
        </Link>
      </div>
    </div>
    <div className={s.children}>{children}</div>
  </div>
);

Header.propType = propType;
export default Header;
