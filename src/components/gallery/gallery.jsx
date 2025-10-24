import rohitImage from '../../assets/rohit-yadav123.jpg';
import friendsImage from '../../assets/friends3.jpg';
import './gallery.css';

const Gallery = () => {
  return (
    <section id="gallery" className="gallery-section">
      <h2 className="gallery-title">About Rohit Yadav</h2>
      <div className="gallery-container">
        
        {/* Rohit Yadav Professional Photo */}
        <div className="gallery-item">
          <img 
            src={rohitImage} 
            alt="Rohit Yadav - Backend Developer Java Spring Boot Expert Mumbai TCET Graduate Software Engineer"
            title="Rohit Yadav - Experienced Backend Developer specializing in Java, Spring Boot, and Microservices from Mumbai, India"
            className="gallery-image rohit-photo"
            loading="lazy"
            width="400"
            height="400"
          />
          <div className="gallery-caption">
            <h3>Rohit Yadav - Backend Developer</h3>
            <p>Java & Spring Boot Expert | TCET Mumbai Graduate | Available for Backend Development Opportunities</p>
          </div>
        </div>

        {/* Friends/Team Photo */}
        <div className="gallery-item">
          <img 
            src={friendsImage} 
            alt="Rohit Yadav with Friends Team Collaboration Software Development Mumbai TCET College"
            title="Rohit Yadav with friends and colleagues - Team collaboration in software development"
            className="gallery-image friends-photo"
            loading="lazy"
            width="400"
            height="300"
          />
          <div className="gallery-caption">
            <h3>Team Collaboration</h3>
            <p>Working with friends and colleagues on software development projects</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Gallery;
