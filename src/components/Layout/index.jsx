import React from "react";
import PropTypes from "prop-types";
import s from "./Layout.module.scss";
import Header from "../Header";

const propType = {
  children: PropTypes.node.isRequired,
};

const Layout = ({ children }) => {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <Header />
        <div className={s.child}>{children}</div>
      </div>
    </div>
  );
};

Layout.propType = propType;
export default Layout;
