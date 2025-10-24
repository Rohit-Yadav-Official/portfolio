import { useState, useEffect, useRef } from 'react';
import rohit from '../../assets/logo.png';
import './navbar.css';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaChevronDown } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    // Close dropdown when opening mobile menu
    if (!menuOpen) {
      setDropdownOpen(false);
    }
  };
  
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="navBar">
      <img src={rohit} alt="logo" className="logo" />

      <div className="hamburger" onClick={toggleMenu}>
        <GiHamburgerMenu size={25} />
      </div>

      <div className={`right section ${menuOpen ? 'open' : ''}`}>
        <div className="desktopMenu">
          <ScrollLink to="intro" className="desktopMenuListItem" smooth={true} duration={500}>Home</ScrollLink>
          <ScrollLink to="projects" className="desktopMenuListItem" smooth={true} duration={500}>Projects</ScrollLink>
          <ScrollLink to="dsa" className="desktopMenuListItem" smooth={true} duration={500}>DSA</ScrollLink>
          <Link to="/blog" className="desktopMenuListItem">Blog</Link>
          
          {/* Dropdown Menu */}
          <div className="dropdown-container" ref={dropdownRef}>
            <button 
              className="dropdown-trigger desktopMenuListItem"
              onClick={toggleDropdown}
            >
              More <FaChevronDown className={`dropdown-arrow ${dropdownOpen ? 'open' : ''}`} />
            </button>
            
            <div className={`dropdown-menu ${dropdownOpen ? 'open' : ''}`}>
              <Link 
                to="/interview-experience" 
                className="dropdown-item"
                onClick={() => {
                  setDropdownOpen(false);
                  setMenuOpen(false);
                }}
              >
                Interview
              </Link>
              <Link 
                to="/core-subject" 
                className="dropdown-item"
                onClick={() => {
                  setDropdownOpen(false);
                  setMenuOpen(false);
                }}
              >
                Core Subjects
              </Link>
              <ScrollLink 
                to="contact" 
                className="dropdown-item"
                smooth={true} 
                duration={500}
                onClick={() => {
                  setDropdownOpen(false);
                  setMenuOpen(false);
                }}
              >
                Contact Us
              </ScrollLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
