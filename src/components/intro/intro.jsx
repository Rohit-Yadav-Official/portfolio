
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
          <img src={hiimage} alt="hi" className="hiimage" />
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <img src={youtube} alt="YouTube" className="youtube" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src={linkdin} alt="LinkedIn" className="linkdin" />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <img src={github} alt="GitHub" className="github" />
          </a>
        </div>

        {/* Text Section */}
        <span className="introText">
          I&apos;m <span className="introName">Rohit Yadav</span>
          <br />
          Backend Developer
        </span>

        {/* Download Resume Button */}
        <a href={resume} download="Rohit_Yadav_Resume.pdf" className="downloadResume">
          <img src={resumeb} alt="resumebutton" />
          
        </a>
      </div>

      {/* Background Image */}
      <img src={bg} alt="Rohit Yadav - Java and Spring Boot Developer" className="bg" />
    </section>
  );
};

export default Intro;
