import React from "react";
import PropTypes from "prop-types";
import s from "./RecomendationCard.module.scss";

const propTypes = {
  text: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
};

const RecomendationCard = ({ text, author, company }) => (
  <div className={s.root}>
    <div className={s.child}>
      <div className={s.title}>{text}</div>
      <div className={s.author}>
        <h5>{author}</h5>
        <p className={s.company}>{company}</p>
      </div>
    </div>
  </div>
);

RecomendationCard.propTypes = propTypes;
export default RecomendationCard;
