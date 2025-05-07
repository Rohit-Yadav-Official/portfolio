import rohit from '../../assets/logo.png';
import contact from '../../assets/contact.png';
import './navbar.css';
import { Link  } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="navBar">
      <img src={rohit} alt="logo" className="logo" />
      <div className="desktopMenu">
      <ScrollLink to="intro" className="desktopMenuListItem" smooth={true} duration={500}>Home</ScrollLink>
<ScrollLink to="projects" className="desktopMenuListItem" smooth={true} duration={500}>Projects</ScrollLink>
<ScrollLink to="dsa" className="desktopMenuListItem" smooth={true} duration={500}>DSA</ScrollLink>
<Link to="/blog" className="desktopMenuListItem">Blog</Link>

      </div>
      <ScrollLink to="contact" smooth={true} duration={500}>
        <button className="contactButton">
          <img src={contact} alt="contact" className="contactNavBar" />
          Contact Me
        </button>
      </ScrollLink>
    </nav>
  );
};

export default Navbar;
