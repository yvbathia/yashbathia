import React from "react";
import s from "./UnderMaintenance.module.scss";
import underMaintenance from "../../images/under-maintenance.png";

const UnderMaintenance = () => (
  <div className={s.root}>
    <div className={s.img}>
      <img src={underMaintenance} alt="underMaintenance" />
    </div>
  </div>
);

export default UnderMaintenance;
