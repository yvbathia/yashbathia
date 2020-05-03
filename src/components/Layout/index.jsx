import React from "react";
import PropTypes from "prop-types";
import s from "./Layout.module.scss";
import Header from "../Header";
import HeadCard from "../HeadCard";

const propType = {
  children: PropTypes.node.isRequired,
  headText: PropTypes.string,
};

const Layout = ({ children, headText }) => {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <div className={s.header}>
          <Header />
        </div>
        {headText && (
          <div className={s.head}>
            <HeadCard text={headText} />
          </div>
        )}
        <div className={s.child}>{children}</div>
      </div>
    </div>
  );
};

Layout.propType = propType;
export default Layout;
