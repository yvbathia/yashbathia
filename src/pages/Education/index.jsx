import React from "react";
import s from "./Education.module.scss";

const Education = () => (
  <div className={s.root}>
    <div className={s.title}>Education</div>
    <div className={s.details}>
      <div className={s.education}>
        <div className={s.year}>2017</div>
        <div className={s.uni}>DAIICT</div>
        <div className={s.degree}>Msc-IT</div>
        <div className={s.perc}>69%</div>
      </div>
      <div className={s.education}>
        <div className={s.year}>2015</div>
        <div className={s.uni}>Ahmedabad University</div>
        <div className={s.degree}>BCA</div>
        <div className={s.perc}>78%</div>
      </div>
    </div>
  </div>
);

export default Education;
