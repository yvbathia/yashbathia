import React from "react";
import PropTypes from "prop-types";
import s from "./ProgressBarWithTItle.module.scss";

const propTypes = {
  title: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

const ProgressBarWithTItle = ({ title, percentage }) => (
  <div className={s.root}>
    <div className={s.head}>
      <h4>{title}</h4>
      <span>{`${percentage}%`}</span>
    </div>
    <div className={s.progressContainer}>
      <div className={s.progress} style={{ width: `${percentage}%` }} />
    </div>
  </div>
);

ProgressBarWithTItle.propTypes = propTypes;
export default ProgressBarWithTItle;
