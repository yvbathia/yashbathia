import React from "react";
import s from "./UnderMaintance.module.scss";
import underMaintance from "../../images/under-maintance.png";

const UnderMaintance = () => (
  <div className={s.root}>
    <div className={s.img}>
      <img src={underMaintance} alt="underMaintance" />
    </div>
  </div>
);

export default UnderMaintance;
