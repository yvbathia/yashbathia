import React from "react";
import Header from "../../components/Header";
import About from "../About";
import s from "./Home.module.scss";
import Skills from "../Skills";
import Education from "../Education";

const Home = () => (
  <Header>
    <>
      <div className={s.about}>
        <About />
      </div>
      <div className={s.about}>
        <Skills />
      </div>
      <div className={s.about}>
        <Education />
      </div>
    </>
  </Header>
);

export default Home;
