
import bg from "../../assets/pxArt.png";
import hiimage from "../../assets/hiimage.png";
import youtube from "../../assets/youtube.png";
import github from "../../assets/git.jpg";
import linkdin from "../../assets/linkdin.png";
import resume from "../../assets/resume645.pdf";
import resumeb from "../../assets/resumebutton.png";
import "./intro.css";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introcontent">
        {/* Image Section */}
        <div className="img">
          <img 
            src={hiimage} 
            alt="Rohit Yadav Backend Developer greeting" 
            title="Rohit Yadav - Backend Developer specializing in Java and Spring Boot"
            className="hiimage" 
          />
          <a href="https://www.youtube.com/@multivitamin_coder" target="_blank" rel="noopener noreferrer">
            <img 
              src={youtube} 
              alt="Rohit Yadav YouTube Channel - Java Backend Tutorials" 
              title="Subscribe to Rohit Yadav's YouTube channel for backend development tutorials"
              className="youtube" 
            />
          </a>
          <a href="https://www.linkedin.com/in/rohityadav12/" target="_blank" rel="noopener noreferrer">
            <img 
              src={linkdin} 
              alt="Rohit Yadav LinkedIn Profile - Backend Developer Mumbai" 
              title="Connect with Rohit Yadav on LinkedIn"
              className="linkdin" 
            />
          </a>
          <a href="https://github.com/Rohit-Yadav-Official" target="_blank" rel="noopener noreferrer">
            <img 
              src={github} 
              alt="Rohit Yadav GitHub - Java Spring Boot Projects" 
              title="View Rohit Yadav's open source projects on GitHub"
              className="github" 
            />
          </a>
        </div>

        {/* Text Section */}
        <span className="introText">
          I&apos;m <span className="introName">Rohit Yadav</span>
          <br />
          Backend Developer
        </span>

        {/* Download Resume Button */}
        <a href={resume} target="_blank" rel="noopener noreferrer" className="downloadResume">
          <img 
            src={resumeb} 
            alt="Download Rohit Yadav Resume - Backend Developer Java Spring Boot" 
            title="Download Rohit Yadav's Resume - Backend Developer specializing in Java, Spring Boot, and Microservices"
          />
        </a>
      </div>

      {/* Background Image */}
      <img 
        src={bg} 
        alt="Rohit Yadav Backend Developer Portfolio - Java Spring Boot Expert Mumbai" 
        title="Rohit Yadav - Backend Developer specializing in Java, Spring Boot, Microservices, and System Design"
        className="bg" 
      />
    </section>
  );
};

export default Intro;
