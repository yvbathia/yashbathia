import React from "react";
import s from "./Skills.module.scss";

const Skills = () => (
  <div className={s.root}>
    <div className={s.title}>Skills</div>
    <div className={s.details}>
      <span>HTML</span>
      <span>JS</span>
      <span>React</span>
      <span>GatsBy.js</span>
      <span>Next.js</span>
      <span>SCSS</span>
      <span>Python</span>
      <span>PHP</span>
      <span>GraphQL</span>
      <span>Git</span>
    </div>
  </div>
);

export default Skills;
