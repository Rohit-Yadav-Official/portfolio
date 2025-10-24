import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { FaGithub, FaLinkedin, FaYoutube, FaTwitter, FaEnvelope, FaMapMarkerAlt, FaGraduationCap, FaCode } from 'react-icons/fa';
import './footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Footer Top Section */}
        <div className="footer-top">
          <div className="footer-section">
            <h3 className="footer-title">Rohit Yadav</h3>
            <p className="footer-description">
              Backend Developer specializing in Java, Spring Boot, and Microservices. 
              Building scalable applications with modern technologies.
            </p>
            <div className="footer-social">
              <a 
                href="https://github.com/Rohit-Yadav-Official" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link social-cursor"
                aria-label="GitHub Profile"
              >
                <FaGithub />
              </a>
              <a 
                href="https://www.linkedin.com/in/rohityadav12/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link social-cursor"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin />
              </a>
              <a 
                href="https://www.youtube.com/@multivitamin_coder" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link social-cursor"
                aria-label="YouTube Channel"
              >
                <FaYoutube />
              </a>
              <a 
                href="https://twitter.com/RohitYadav_dev" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link social-cursor"
                aria-label="Twitter Profile"
              >
                <FaTwitter />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li>
                <ScrollLink to="intro" smooth={true} duration={500} className="footer-link footer-cursor">
                  Home
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="skills" smooth={true} duration={500} className="footer-link footer-cursor">
                  Skills
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="projects" smooth={true} duration={500} className="footer-link footer-cursor">
                  Projects
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="dsa" smooth={true} duration={500} className="footer-link footer-cursor">
                  DSA
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="contact" smooth={true} duration={500} className="footer-link footer-cursor">
                  Contact
                </ScrollLink>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Content</h4>
            <ul className="footer-links">
              <li>
                <Link to="/blog" className="footer-link">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/interview-experience" className="footer-link">
                  Interview Experiences
                </Link>
              </li>
              <li>
                <Link to="/core-subject" className="footer-link">
                  Core Subjects
                </Link>
              </li>
              <li>
                <a 
                  href="https://medium.com/@yadavrohit-dev" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  Medium Articles
                </a>
              </li>
              <li>
                <a 
                  href="https://www.youtube.com/@multivitamin_coder" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  YouTube Videos
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Contact Info</h4>
            <div className="footer-contact">
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <a href="mailto:yadavrohit-dev@outlook.com" className="contact-link">
                  yadavrohit-dev@outlook.com
                </a>
              </div>
              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <span className="contact-text">Mumbai, India</span>
              </div>
              <div className="contact-item">
                <FaGraduationCap className="contact-icon" />
                <span className="contact-text">TCET Mumbai</span>
              </div>
              <div className="contact-item">
                <FaCode className="contact-icon" />
                <span className="contact-text">Backend Developer</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="footer-copyright">
              <p>&copy; {currentYear} Rohit Yadav. All rights reserved.</p>
              <p className="footer-tagline">Building the future, one line of code at a time.</p>
            </div>
            <div className="footer-bottom-links">
              <a href="/privacy" className="footer-bottom-link">Privacy Policy</a>
              <a href="/terms" className="footer-bottom-link">Terms of Service</a>
              <a href="/sitemap.xml" className="footer-bottom-link">Sitemap</a>
            </div>
          </div>
        </div>

        {/* Back to Top Button */}
        <ScrollLink 
          to="intro" 
          smooth={true} 
          duration={500} 
          className="back-to-top"
          aria-label="Back to top"
        >
          ↑
        </ScrollLink>
      </div>
    </footer>
  );
};

export default Footer;
