import React from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout";
import s from "./Home.module.scss";
import avatar from "../../images/avatar.jpg";
import { ReactComponent as FB } from "../../images/fb.svg";
import { ReactComponent as GitHub } from "../../images/github.svg";
import { ReactComponent as LinkedIn } from "../../images/linkedin.svg";
// import { ReactComponent as Twitter } from "../../images/twitter.svg";
import { CONTACT } from "../../constants/routes";

const Home = () => (
  <Layout>
    <div className={s.root}>
      <div className={s.about}>
        <div className={s.profile}>
          <img src={avatar} alt="Yash" />
          <div className={s.social}>
            <GitHub />
            <LinkedIn />
            {/* <Twitter /> */}
            <FB />
          </div>
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
          <div className={s.btns}>
            <a
              className={s.resume}
              href="https://drive.google.com/uc?export=download&id=1p5ChdKsN-xgeNqVRmMSRXmnzaQSkK-2g"
            >
              Download CV
            </a>
            <Link className={s.contact} to={CONTACT}>
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default Home;
