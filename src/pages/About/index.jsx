import React from "react";
import s from "./About.module.scss";

const About = () => (
  <div className={s.root}>
    <div className={s.title}>About Me</div>
    <div className={s.details}>
      Hi, I'm Yash Bathia, Software enginner, currently working with awesome
      folks at Tech Holdings. Passionate about building world class web applications. Have a look at skills or just connect with me on
      <a
        href="https://www.linkedin.com/in/yash-bathia/"
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        LinkedIn
      </a>
      . I am always excited to do business with like minded people, lets discuss
      over coffee.
    </div>
  </div>
);

export default About;
