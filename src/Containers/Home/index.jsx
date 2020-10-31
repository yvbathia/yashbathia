import React from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout";
import s from "./Home.module.scss";
import avatar from "../../images/avatar.jpg";
import { ReactComponent as FB } from "../../images/fb.svg";
import { ReactComponent as GitHub } from "../../images/github.svg";
import { ReactComponent as LinkedIn } from "../../images/linkedin.svg";
import { ReactComponent as Twitter } from "../../images/twitterNew.svg";
import { CONTACT } from "../../constants/routes";
import HR from "../../components/HR";
import RecomendationCard from "../../components/RecomendationCard";
import { useState } from "react";
import { useWindowWidth } from "../../hooks/windowHook";

const recomendationData = [
  {
    title:
      "Yash has been an integral part of ITSM product development team at Flotomate. I've hired Yash when he was a fresh graduate and witnessed him to quickly becoming a responsible Software professional in 2 years. He took ownership of complex product features and delivered the result for the business. Yash pursues a great attitude and aptitude with a keen interest to understand the product domain. That makes him a great asset to any engineering or product team. Besides engineering, One thing Yash made himself different from other engineers is to work with customers and make them successful both in terms of enterprise implementation or resolving the technical issue in the production environment under time pressure.",
    author: "Akash Kotadia",
    company: "Flotomate",
  },
  {
    title:
      "Yash is a great team member and was definitely a great asset to our front-end focused team. He has great JavaScript skills and excellent English communication ability. Yash is reliable, accountable, and kind to others. Looking forward to working with Yash again the future! Thank you Yash!",
    author: "Andy Saman",
    company: "Tech Holding",
  },
  {
    title:
      "Yash is canny lad and excellent recourse to connect with. He has impressive talent, he is proactive and result oriented person. His abilities are beyond the par. He is self enthusiast and fun loving guy to connect with. I believe his overall presence had a positive impact on company and my individual experience working with him.",
    author: "Punit Mirani",
    company: "Tech Holding",
  },
  {
    title:
      "I had the privilege of working with Yash for more than 1.5 year. During this time, we worked together on multiple projects related to ITSM. Yash is a person with a strong ownership and driving for results all the time. He sees and can address everything from the big picture to the details. Yash is result oriented, responsible and technically sound employee and he is always ready to put all his energy and time to get the job done. He is an asset to any company that he's with.",
    author: "Vishal Patel",
    company: "Flotomate",
  },
  {
    title:
      "Got less time to hang around with him. As an individual, he loves working with fun involved. Understands the project's concepts quickly and executes requirement development in time. Smart fellow to work with.",
    author: "Pallav Purohit",
    company: "Bomaby Softwares",
  },
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const width = useWindowWidth();
  return (
    <Layout>
      <div className={s.root}>
        <div className={s.about}>
          <div className={s.profile}>
            <img src={avatar} alt="Yash" />
            <div className={s.social}>
              <a href="https://github.com/yvbathia" target="__blank">
                <GitHub />
              </a>
              <a
                href="https://www.linkedin.com/in/yash-bathia/"
                target="__blank"
              >
                <LinkedIn />
              </a>
              <a href="https://twitter.com/yashbathia" target="__blank">
                <Twitter />
              </a>
              <a href="https://www.facebook.com/yashbathia" target="__blank">
                <FB />
              </a>
            </div>
          </div>
          <div className={s.me}>
            <span className={s.eyeBrow}>Front-end developer</span>
            <span className={s.name}>Yash Bathia</span>
            <span className={s.detail}>
              Currently working with awesome folks at NoBroker. Passionate
              about building world class web applications. Have a look at skills
              or just connect with me on{" "}
              <a href="https://www.linkedin.com/in/yash-bathia/">LinkedIn</a>. I
              am always excited to do business with like minded people, lets
              discuss over coffee.
            </span>
            <div className={s.btns}>
              <a
                className={s.resume}
                href="https://drive.google.com/uc?export=download&id=1-hJYRT6xCMwLzH-qbXsp56Br9YKMaQcK"
              >
                Download CV
              </a>
              <Link className={s.contact} to={CONTACT}>
                Contact
              </Link>
            </div>
          </div>
        </div>
        <div className={s.recommendations}>
          <div className={s.recomTitle}>
            <h2>Recommendations</h2>
            <HR />
          </div>
          <div className={s.recomItems}>
            {width > 1200 ? (
              recomendationData.slice(currentIndex === recomendationData.length - 1 ? currentIndex - 1 : currentIndex, currentIndex + 2).map((element) => (
                <RecomendationCard
                  key={element.author}
                  text={element.title}
                  author={element.author}
                  company={element.company}
                />
              ))
            ) : (
              <RecomendationCard
                key={currentIndex}
                text={recomendationData[currentIndex].title}
                author={recomendationData[currentIndex].author}
                company={recomendationData[currentIndex].company}
              />
            )}
          </div>
          <div className={s.pagination}>
            {width > 1200
              ? [...Array(recomendationData.length - 2)].map((_, index) => (
                  <span
                    key={index}
                    onClick={() => setCurrentIndex(index * 2)}
                    className={[
                      s.nav,
                      currentIndex === index * 2 ? s.current : "",
                    ].join(" ")}
                  />
                ))
              : [...Array(recomendationData.length)].map((_, index) => (
                  <span
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={[
                      s.nav,
                      currentIndex === index ? s.current : "",
                    ].join(" ")}
                  />
                ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
