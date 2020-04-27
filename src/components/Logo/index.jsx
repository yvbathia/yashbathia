import React from "react";
import s from "./Logo.module.scss";
import { Link } from "react-router-dom";

const Logo = () => (
  <Link className={s.link} to="/">
    <div className={s.root}>
      <div className={s.symbole}>Y</div>
      <div className={s.name}>
        <span className={s.fname}>Yash</span>
        <span className={s.lname}> Bathia</span>
      </div>
    </div>
  </Link>
);

export default Logo;
