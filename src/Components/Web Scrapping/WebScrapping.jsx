import React from 'react'
import WebScrapping1 from "../../Assets/WebScrapingImg2.png"
import './Webscrapping.css';
import { SlideRight, SlideLeft } from "../Animations/Reveal";

function WebScrapping() {
  return (
    <div className='web-main'>
      <div className='web-inner'>
        <div className='web-img'>
          <SlideRight>
            <img className='webscrap-img' src={WebScrapping1} alt="" />
          </SlideRight>
        </div>
        <div className='web-contn'>
          <SlideLeft delay={0.2}>
            <h1>Web Scrapping: </h1>
            <p>Our Web Scraping Services provide specialized solutions for extracting valuable data from the web efficiently and accurately, Leveraging advanced tools and techniques, we deliver customized data extraction services to meet unique business requirements. From e-commerce insights to competitor analysis and market trends, our services help businesses gain actionable insights to drive data-backed decisions.</p>
            <li>Features in Our Web Scrapy</li>
            <li>Normalize the scraped data with Al/ NLP algorithms.</li>
            <li>Maintain the Scrapy Logs in one place</li>
            <li>We can integrate the error alerting system with Slack, Teama, Mail, etc.</li>
            <li>We can provide the own insights view for scraped products.</li>
          </SlideLeft>
        </div>
      </div>
    </div>

  )
}

export default WebScrapping
