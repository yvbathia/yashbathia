import React from "react";
import Layout from "../../components/Layout";
import s from "./Portfolio.module.scss";
import Project1 from "../../images/project1.png";
import Project2 from "../../images/project2.png";
import Project3 from "../../images/project3.png";
import Project4 from "../../images/project4.png";
import Project5 from "../../images/project5.png";

const Portfolio = () => (
  <Layout headText="Portfolio">
    <div className={s.root}>
      <div className={s.container}>
        <img src={Project1} className={s.img} alt="Project1" />
        <div className={s.btns}>
          <a href="github" className={s.gitHub}>
            GitHub
          </a>
          <a href="Live" className={s.live}>
            Live
          </a>
        </div>
      </div>
      <div className={s.container}>
        <img src={Project2} className={s.img} alt="Project2" />
        <div className={s.btns}>
          <a href="github" className={s.gitHub}>
            GitHub
          </a>
          <a href="Live" className={s.live}>
            Live
          </a>
        </div>
      </div>
      <div className={s.container}>
        <img src={Project3} className={s.img} alt="Project3" />
        <div className={s.btns}>
          <a href="github" className={s.gitHub}>
            GitHub
          </a>
          <a href="Live" className={s.live}>
            Live
          </a>
        </div>
      </div>
      <div className={s.container}>
        <img src={Project4} className={s.img} alt="Project4" />
        <div className={s.btns}>
          <a href="github" className={s.gitHub}>
            GitHub
          </a>
          <a href="Live" className={s.live}>
            Live
          </a>
        </div>
      </div>
      <div className={s.container}>
        <img src={Project5} className={s.img} alt="Project5" />
        <div className={s.btns}>
          <a href="github" className={s.gitHub}>
            GitHub
          </a>
          <a href="Live" className={s.live}>
            Live
          </a>
        </div>
      </div>
    </div>
  </Layout>
);

export default Portfolio;
