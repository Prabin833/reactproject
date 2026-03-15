import React, { useEffect, useState } from 'react'
import './Navbar.css'
import Logo from '../../assets/nav-logo-2.png'
import { Link } from 'react-scroll';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
  },[]);
  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = ()=>{
    mobileMenu? setMobileMenu(false) : setMobileMenu(true);
  }

  return (
    <nav className={`container ${sticky? 'scroll-nav' : ''} `}>
        <img src= {Logo} alt="" id='logo' />
        <ul className = {mobileMenu?'':'hide-mobile-menu'}>
            <li><Link to='hero'smooth={true} offset={-270} duration={500} >Home</Link></li>
            <li><Link to='Programes'smooth={true} offset={-270} duration={500} >Beaches</Link></li>
            <li><Link to='food'smooth={true} offset={-270} duration={500} >Food</Link></li>
            <li><Link to='slider-div'smooth={true} offset={-270} duration={500} >Visitors</Link></li>
            <li><Link to='contact'smooth={true} offset={-270} duration={500} className='btn'>Contact us</Link></li>
        </ul>
        <i className="fa-solid fa-bars menu-icon" onClick={toggleMenu}></i>
    </nav>
  )
}

export default Navbar