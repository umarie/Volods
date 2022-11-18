import React,{useState,useEffect} from 'react'
import { Link } from "react-router-dom";
import {FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import './Navbar.css'
import volodslogo from '../../Images/VOLODS.png'


export default function NavBar() {
  const page = window.location.href.split("/").pop();
  const [click, setClick] = useState(false);
  const [logo, setLogo] = useState(false);

  const handleClick = () => {
    window.scrollTo(0, 0)
    setClick(!click);
  };

  const closeMobileMenu = () => {
    setClick(false);
    window.scrollTo(0, 0)
  };

  useEffect(() => {
    showButton();
  }, [])
  

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setLogo(true);
    } else {
      setLogo(false);
    }
  };

  window.addEventListener("resize", showButton);



  return (
    <>
     <IconContext.Provider value={{ color: "#94C0D9" }}>
        <div className="navbar">
          <div className="navbar-container container">
          {logo && <Link to="/" onClick={closeMobileMenu}>
              <img className='w-20 h-20' src={volodslogo} alt='volods-logo'/>
            </Link>}
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link to="/aboutus" className="nav-links hover:scale-90 hover:text-[#94C0D9]" onClick={closeMobileMenu}>
                  {page==="aboutus" ? <p className='text-[#94C0D9]'>About Us</p> : <p>About Us</p> }
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/services"
                  className="nav-links hover:scale-90 hover:text-[#94C0D9]"
                  onClick={closeMobileMenu}
                >
                      {page==="services" ? <p className='text-[#94C0D9]'>Our Services</p> : <p>Our Services</p> }
              
  
                </Link>
              </li>
            {!logo && <Link to="/" onClick={closeMobileMenu}>
                 <img className='w-20 h-20' src={volodslogo} alt='volods-logo'/>
            </Link>}
              <li className="nav-item">
                <Link
                  to="/hiredevs"
                  className="nav-links hover:scale-90 hover:text-[#94C0D9]"
                  onClick={closeMobileMenu}
                >
                  
                  {page==="hiredevs" ? <p className='text-[#94C0D9]'> For Clients</p> : <p> For Clients</p> }
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/fordevelopers"
                  className="nav-links hover:scale-90 hover:text-[#94C0D9]"
                  onClick={closeMobileMenu}
                >
                    {page==="fordevelopers" ? <p className='text-[#94C0D9]'>For Developers</p> : <p>For Developers</p> }
              
               
                </Link>
              </li>
              {logo && <li className="nav-item">
                <a
                  href="https://calendly.com/volods"
                  rel="noreferrer"
              target="_blank"
                  className="nav-links hover:scale-90 hover:text-[#94C0D9]"
                  onClick={closeMobileMenu}
                >
                  Book a call
                </a>
              </li>}
            </ul>
          </div>
        </div>
      </IconContext.Provider>
    </>
  )
}
