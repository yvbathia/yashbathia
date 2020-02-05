import React from "react";
import Header from "../../components/Header";
import s from "./Home.module.scss";
import Avatar from "../../images/avatar.jpg";

const Home = () => (
  <Header>
    <div className={s.root}>
      <div className={s.left}>
        <img className={s.img} src={Avatar} alt="Avatar" />
      </div>
      <div className={s.right}>
        <div className={s.intro}>
          <p>Thanks for stopping by...</p>
          <p>
            Hi, I'm Yash Bathia, Software enginner, currently working with
            awesome folks at Tech Holdings.
          </p>
        </div>
        <div className={s.details}>
          Have a look at skills or just connect with me on
          <a
            href="https://www.linkedin.com/in/yash-bathia/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            LinkedIn
          </a>
          . I am always excited to do business with like minded people, lets
          discuss over coffee.
        </div>
      </div>
    </div>
  </Header>
);

export default Home;
