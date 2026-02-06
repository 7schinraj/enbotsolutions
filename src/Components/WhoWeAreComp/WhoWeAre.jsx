import React from 'react'
import '../HomeComp/Home.css'
import { Reveal, SlideLeft, SlideRight } from "../Animations/Reveal";

const WhoWeAre = (props) => {
  return (
    <div>
      <section className="wh-i-do-container">
        <div className="intro-section">
          <div className="intro-text container-left">
            <Reveal>
              <h1>
                {props.title}
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="contents">{props.des}</p>
            </Reveal>
            <Reveal delay={0.4}>
              <p className='contents'>{props.des2}</p>
            </Reveal>
          </div>
          <div className="right-side-container container-right">
            <SlideRight delay={0.3}>
              <img
                className="growth-image"
                src={props.image}
                alt="ENBOT illustration"
              />
            </SlideRight>
          </div>
        </div>
      </section>
    </div>
  )
}

export default WhoWeAre
