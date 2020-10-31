import React from "react";
import s from "./Resume.module.scss";
import Layout from "../../components/Layout";
import HR from "../../components/HR";
import EduExpCard from "../../components/EduExpCard";
import ProgressBarWithTItle from "../../components/ProgressBarWithTItle";

const Resume = () => {
  return (
    <Layout headText="Resume">
      <div className={s.root}>
        <div className={s.eduExp}>
          <div className={s.edu}>
            <div className={s.title}>
              <h2>Education</h2>
              <HR />
            </div>
            <div className={s.card}>
              <EduExpCard
                year="2015-2017"
                heading="DA-IICT"
                title="MSc - IT"
                desc="Pursued post-graduation in IT with 67%"
              />
              <EduExpCard
                year="2012-2015"
                heading="Ahmedabad University"
                title="BCA"
                desc="Pursued graduation in computer applications with 78%"
              />
            </div>
          </div>
          <div className={s.exp}>
            <div className={s.title}>
              <h2>Experiance</h2>
              <HR />
              <div className={s.card}>
                <EduExpCard
                  year="Aug-2020 - Current"
                  heading="NoBroker"
                  title="Software Engineer"
                  desc="React, Redux-saga, JavaScript, HTML, CSS"
                />
                <EduExpCard
                  year="May-2019 - May-2020"
                  heading="Tech Holding"
                  title="Software Engineer"
                  desc="React, NextJs, GatsbyJs, TypeScript, GraphQL, DynamoDB, HTML, CSS"
                />
                <EduExpCard
                  year="May-2017 - Dec-2018"
                  heading="Flotomate"
                  title="Software Engineer"
                  desc="Python, Java, SQLite, PostgreSQL, HA, DevOps, Product design"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={s.skills}>
          <div className={s.experienced}>
            <div className={s.title}>
              <h2>Experienced Skills</h2>
              <HR />
            </div>
            <div className={s.skill}>
              <ProgressBarWithTItle title="Python" percentage={60} />
              <ProgressBarWithTItle title="Java" percentage={30} />
              <ProgressBarWithTItle title="DevOps" percentage={30} />
              <ProgressBarWithTItle title="GraphQL" percentage={50} />
              <ProgressBarWithTItle title="SQL" percentage={40} />
              <ProgressBarWithTItle title="NoSQL" percentage={50} />
              <ProgressBarWithTItle title="Jest" percentage={60} />
              <ProgressBarWithTItle title="Cypress" percentage={50} />
            </div>
          </div>
          <div className={s.core}>
            <div className={s.title}>
              <h2>Core Skills</h2>
              <HR />
            </div>
            <div className={s.skill}>
              <ProgressBarWithTItle title="JavaScript" percentage={70} />
              <ProgressBarWithTItle title="React" percentage={70} />
              <ProgressBarWithTItle title="GatsByJs" percentage={65} />
              <ProgressBarWithTItle title="NextJs" percentage={60} />
              <ProgressBarWithTItle title="Redux-saga" percentage={60} />
              <ProgressBarWithTItle title="TypeScript" percentage={60} />
              <ProgressBarWithTItle title="HTML" percentage={80} />
              <ProgressBarWithTItle title="CSS" percentage={80} />
              <ProgressBarWithTItle title="Styled Components" percentage={80} />
              <ProgressBarWithTItle title="SASS" percentage={80} />
            </div>
          </div>
        </div>
        <div className={s.responsiblity}>
          <div className={s.title}>
            <h2>POSITION OF RESPONSIBILITY</h2>
            <HR />
          </div>
          <div className={s.listItems}>
            <span>
              - Worked in customer-facing for product analyzed and product design
            </span>
            <span>- Responsible for the release management lifecycle</span>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Resume;
