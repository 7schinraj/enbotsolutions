import React from 'react'
import './ExperienceComp.css'

const ExperienceComp = (props) => {
  return (
    <div className="years-sec">
        <h1 className='year'>{props.year}</h1>
        <p className='des'>{props.des}</p>
    </div>
  )
}

export default ExperienceComp