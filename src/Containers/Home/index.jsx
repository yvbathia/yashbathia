import React from "react";
import Layout from "../../components/Layout";
import s from "./Home.module.scss";
import avatar from "../../images/avatar.jpg";

const Home = () => (
  <Layout>
    <div className={s.root}>
      <div className={s.about}>
        <div className={s.profile}>
          <img src={avatar} alt="Yash" />
        </div>
        <div className={s.me}>
          <span className={s.eyeBrow}>Front-end developer</span>
          <span className={s.name}>Yash Bathia</span>
          <span className={s.detail}>
            Currently working with awesome folks at Tech Holdings. Passionate
            about building world class web applications. Have a look at skills
            or just connect with me on{" "}
            <a href="https://www.linkedin.com/in/yash-bathia/">LinkedIn</a>. I
            am always excited to do business with like minded people, lets
            discuss over coffee.
          </span>
        </div>
      </div>
    </div>
  </Layout>
);

export default Home;
