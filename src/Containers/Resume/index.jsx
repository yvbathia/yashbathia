import React from "react";
import s from "./Resume.module.scss";
import Layout from "../../components/Layout";

const Resume = () => {
  return (
    <Layout>
      <div className={s.root}>
        <div className={s.s}>Resume</div>
      </div>
    </Layout>
  );
};

export default Resume;
