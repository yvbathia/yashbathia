import React from "react";
import PropTypes from "prop-types";
import s from "./HeadCard.module.scss";

const propTypes = {
  text: PropTypes.string.isRequired,
};

const HeadCard = ({ text }) => (
  <div className={s.root}>
    <h1>{text}</h1>
  </div>
);

HeadCard.propTypes = propTypes;
export default HeadCard;
