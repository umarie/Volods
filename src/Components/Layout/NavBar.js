import React,{useState,useEffect} from 'react'
import { Link } from "react-router-dom";
import {FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import './Navbar.css'
import volodslogo from '../../Images/VOLODS.png'


export default function NavBar() {

    const [click, setClick] = useState(false);
  const [logo, setLogo] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const closeMobileMenu = () => {
    setClick(false);
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
                <Link to="/" className="nav-links hover:scale-90 hover:text-[#94C0D9]" onClick={closeMobileMenu}>
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/about"
                  className="nav-links hover:scale-90 hover:text-[#94C0D9]"
                  onClick={closeMobileMenu}
                >
                  Contact
                </Link>
              </li>
            {!logo && <Link to="/" onClick={closeMobileMenu}>
                 <img className='w-20 h-20' src={volodslogo} alt='volods-logo'/>
            </Link>}
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-links hover:scale-90 hover:text-[#94C0D9]"
                  onClick={closeMobileMenu}
                >
                  Hire
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-links hover:scale-90 hover:text-[#94C0D9]"
                  onClick={closeMobileMenu}
                >
                  For Developers
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </IconContext.Provider>
    </>
  )
}
