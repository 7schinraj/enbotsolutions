import React from "react";
import "./Home.css";
import Shape1 from "../../Assets/Shape1.png";
import Shape2 from "../../Assets/Shape2.svg";
import Shape3 from "../../Assets/Shape3.svg";
import HomeImg from "../../Assets/HomePageImg.png";
const Home = (props) => {
  return (
    <div>
      <section className="home-container">
       
        <div className="intro-section">
          <div className="intro-text">
            <h1>
              {props.title}
              <span className="highlight">ENBOT</span>
            </h1>
            <p className="contents">{props.des}</p>
          </div>
          <div className="right-side-container">
            <img className="AssetImg1" src={Shape1} alt="" />
            <img className="AssetImg3" src={Shape3} alt="" />
            <img
              className="intro-image"
              src={props.image}
              alt="ENBOT illustration"
            />
            <img className="AssetImg2" src={Shape2} alt="illustration" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
