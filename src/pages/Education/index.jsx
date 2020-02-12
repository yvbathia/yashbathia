import React from "react";
import s from "./Education.module.scss";

const Education = () => (
  <div className={s.root}>
    <div className={s.title}>Education</div>
    <div className={s.details}>
      <div className={s.education}>
        <div className={s.year}>
          <h2>2017</h2>
        </div>
        <div className={s.degree}>
          <div className={s.name}>Msc-IT from DAIICT</div>
          <div className={s.perc}>
            <div className={s.progressWrapper}>
              <div className={s.progress} style={{ width: "69%" }}>
                {" "}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={s.education}>
        <div className={s.year}>
          <h2>2015</h2>
        </div>
        <div className={s.degree}>
          <div className={s.name}>BCA from Ahmedabad University</div>
          <div className={s.perc}>
            <div className={s.progressWrapper}>
              <div className={s.progress} style={{ width: "78%" }}>
                {" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Education;
