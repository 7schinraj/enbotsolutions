import React, { useState, useEffect } from "react";
import './Footer.css'
import DarkLogo from "../../Assets/DarkLogoTheme.png";
import LightLogo from "../../Assets/LogoLight.png"
import { VscSend } from "react-icons/vsc";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { Link as ScrollLink, Element } from "react-scroll";
const Footer = (props) => {

    const SCROLL_DURATION = 500;
    const mailFunc= props.mailfunc
    
  return (
    <div>
        <div className='footer-container'>
            <div className='footer-datas-container'>
                <div className='footer-first-container'>
                    <img src={LightLogo} alt="" />
                    <p>Unlock e-commerce intricacies with our advanced crawling solutions for a competitive boost.</p>
                    <p className='contact'>contact</p>
                    <p className='contact-mail'>support@enbotsolutions.com</p>
                </div>
                <div className='footer-second-child'>
                    <div className='footer-first-container'>
                        <h2 className=''>Quick Links</h2>
                        <ScrollLink className="footer-menus" to="home" spy={true} offset={-150} duration={SCROLL_DURATION}>Home</ScrollLink>
                        <ScrollLink className="footer-menus" to="services" spy={true}  duration={200} offset={-150}>Services</ScrollLink>
                        <ScrollLink className="footer-menus" to="about" spy={true}  duration={400} offset={-70}>About Us</ScrollLink>
                        <ScrollLink className="footer-menus" to="features" spy={true}  duration={400} offset={-150}>Features</ScrollLink>
                        <ScrollLink className="footer-menus" to="products" spy={true}  duration={600} offset={-150}>Products</ScrollLink>
                        <ScrollLink className="footer-menus" to="pricing" spy={true}  duration={600} offset={-100}>Pricing</ScrollLink>
                    </div>
                    <div className='footer-first-container'>
                        <h2 className=''>Support</h2>
                        <ScrollLink onClick={mailFunc}
                        className="footer-menus"
                            to="contact"
                            spy={true}
                            smooth={true}
                            duration={SCROLL_DURATION}
                            offset={-100}
                            >
                    
                            Contact Us
                        </ScrollLink>
                    </div>
                    <div className='footer-first-container'>
                        <h2 className=''>Newsletter</h2>
                        <p className='footer-content'>Subscribe to receive future updates</p>
                        <div className='foter-input-container'>
                            <input onClick={mailFunc} type="email" placeholder='Email Address'/>
                            <button><VscSend /></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='enbot-social-details'>
                <div className='last-footer-container'>
                    <a href="">English</a>
                    <a href="">Privacy Policy </a>
                    <a href="">Support</a>
                </div>
                <p className='footer-p'>© 2024 ENBOT Solutions. All rights reserved</p>
                <div className='footer-icons'>
                    <div className="ic-bg">
                       <FaFacebookF className='f-icons'/>
                    </div>
                    <div className="ic-bg">
                       <FaTwitter className='f-icons'/>
                    </div>
                    <div className="ic-bg">
                       <FaLinkedinIn className='f-icons'/>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer