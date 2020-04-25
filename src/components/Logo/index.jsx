import React from "react";
import s from "./Logo.module.scss";

const Logo = () => (
  <div className={s.root}>
    <div className={s.symbole}>Y</div>
    <div className={s.name}>
      <span className={s.fname}>Yash</span>
      <span className={s.lname}> Bathia</span>
    </div>
  </div>
);

export default Logo;
