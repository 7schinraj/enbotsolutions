import React, { useState, useEffect } from "react";
import './NavCard.css';
import Logo from '../../Assets/LogoLight.png'
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { LiaBookSolid } from "react-icons/lia";
import { AiOutlineProduct } from "react-icons/ai";
import { RiContactsLine } from "react-icons/ri";
import { Link as ScrollLink, Element } from "react-scroll";
import { GiPriceTag } from "react-icons/gi";
import { MdOutlineFeaturedVideo } from "react-icons/md";

const SCROLL_DURATION = 1000;
    const NavCard = ({setIsCloseIc, isCloseIc}) => {
    const changeMenuView = () => {
        setIsCloseIc(!isCloseIc)
        var navBar = document.getElementById('mobile-nav')
        navBar.style.right = '-100%';
        navBar.style.transition = '.5s ease-in';
    }
    return (
        <div className='NavCard'>
        <ul className='NavList'>
                <li  onClick={changeMenuView} className='NavItem TopSpace'>
                    <IoHomeOutline onClick={changeMenuView} className='NavMenuIcon'/>
                    <ScrollLink className="NavMenu" to="home" spy={true} duration={SCROLL_DURATION} offset={-120} onClick={changeMenuView}>Home</ScrollLink>
                </li>
            <li className='NavItem'>
                <MdOutlineMiscellaneousServices className='NavMenuIcon'/>
                <ScrollLink className="NavMenu" to="services" spy={true} duration={200} onClick={changeMenuView} offset={-120}>Services</ScrollLink>
            </li>
            <li className='NavItem'>
                <LiaBookSolid className='NavMenuIcon'/>
                <ScrollLink className="NavMenu" to="about" spy={true} duration={400} onClick={changeMenuView} offset={-120}>About</ScrollLink>
            </li>
            <li className='NavItem'>
                <MdOutlineFeaturedVideo className='NavMenuIcon'/>
                <ScrollLink className="NavMenu" to="features" spy={true} duration={500} onClick={changeMenuView} offset={-120}>Features</ScrollLink>
            </li>
            <li className='NavItem'>
                <AiOutlineProduct className='NavMenuIcon'/>
                <ScrollLink className="NavMenu" to="products" spy={true} duration={600} onClick={changeMenuView} offset={-120}>Products</ScrollLink>
            </li>
            <li className='NavItem'>
                <GiPriceTag className='NavMenuIcon'/>
                <ScrollLink className="NavMenu" to="pricing" spy={true} duration={700} onClick={changeMenuView} offset={-120}>Pricing</ScrollLink>
            </li>
            <li className='NavItem'>
                <RiContactsLine className='NavMenuIcon'/>
                <ScrollLink className="NavMenu" to="contact" spy={true} duration={SCROLL_DURATION} onClick={changeMenuView} offset={-220}>Contact Us</ScrollLink>
            </li>
        </ul>
    </div>
  );
}

export default NavCard;
