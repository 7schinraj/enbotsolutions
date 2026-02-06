import React from "react";
import "./Home.css";
import Shape1 from "../../Assets/Shape1.png";
import Shape2 from "../../Assets/Shape2.svg";
import Shape3 from "../../Assets/Shape3.svg";
import { Reveal, SlideRight, FadeIn } from "../Animations/Reveal";

const Home = (props) => {
  return (
    <div>
      <section className="home-container">
        <div className="intro-section">
          <div className="intro-text">
            <Reveal width="100%">
              <h1>
                {props.title}
                <span className="highlight">ENBOT</span>
              </h1>
            </Reveal>
            <Reveal width="100%" delay={0.4}>
              <p className="contents">{props.des}</p>
            </Reveal>
          </div>
          <div className="right-side-container">
            <FadeIn delay={0.6}>
              <img className="AssetImg1" src={Shape1} alt="" />
            </FadeIn>
            <FadeIn delay={0.8}>
              <img className="AssetImg3" src={Shape3} alt="" />
            </FadeIn>

            <SlideRight delay={0.5}>
              <img
                className="intro-image"
                src={props.image}
                alt="ENBOT illustration"
              />
            </SlideRight>

            <FadeIn delay={0.7}>
              <img className="AssetImg2" src={Shape2} alt="illustration" />
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
