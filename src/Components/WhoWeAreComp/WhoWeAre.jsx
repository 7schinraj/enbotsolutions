import React from 'react'
import '../HomeComp/Home.css'
const WhoWeAre = (props) => {
  return (
    <div>
      <section className="wh-i-do-container">
        <div className="intro-section">
          <div className="intro-text container-left">
            <h1>
              {props.title}
            </h1>
            <p className="contents">{props.des}</p>
            <p className='contents'>{props.des2}</p>
          </div>
          <div className="right-side-container container-right">
            <img
              className="growth-image"
              src={props.image}
              alt="ENBOT illustration"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default WhoWeAre
