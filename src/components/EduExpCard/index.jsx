import React from "react";
import PropTypes from "prop-types";
import s from "./EduExpCard.module.scss";

const propTypes = {
  year: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

const EduExpCard = ({ year, heading, title, desc }) => (
  <div className={s.root}>
    <div className={s.info}>
      <div className={s.year}>{year}</div>
      <div className={s.head}>{heading}</div>
    </div>
    <div className={s.moreInfo}>
      <h4 className={s.title}>{title}</h4>
      <p className={s.desc}>{desc}</p>
    </div>
  </div>
);

EduExpCard.propTypes = propTypes;
export default EduExpCard;
