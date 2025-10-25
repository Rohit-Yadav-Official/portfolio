import './projects.css';
import fame from '../../assets/fame-photo.png';
import portfolio from '../../assets/portfolio-image.png';
const Projects = () => {
  const projectList = [
    { 
      id: 1, 
      title: "EarnFame - Job hunting , earning, competing Platform", 
      description: "A modern social media platform built with React and Node.js, featuring real-time messaging, user profiles, and content sharing capabilities.",
      technologies: ["React", "Java", "Postgres", "RabbitMq", "Spring Boot"],
      liveUrl: "https://earnfame.netlify.app",
      githubUrl: "https://github.com/Rohit-Yadav-Official/fame",
      image: fame
    },
    { 
      id: 2, 
      title: "Portfolio Website", 
      description: "A responsive portfolio website showcasing my skills, projects, and interview experiences. Built with React, Vite, and modern web technologies.",
      technologies: ["React", "Vite", "CSS3", "JavaScript", "Netlify"],
      liveUrl: "https://your-portfolio-url.com",
      githubUrl: "https://github.com/Rohit-Yadav-Official/portfolio",
      image: portfolio
    },
    { 
      id: 3, 
      title: "E-Commerce Backend API", 
      description: "RESTful API for e-commerce platform with user authentication, product management, order processing, and payment integration using Spring Boot.",
      technologies: ["Spring Boot", "Java", "PostgreSQL", "JWT", "Maven"],
      liveUrl: "https://api-demo.herokuapp.com",
      githubUrl: "https://github.com/Rohit-Yadav-Official/ecommerce-api",
      image: "/api/placeholder/400/300"
    },
    { 
      id: 4, 
      title: "Task Management System", 
      description: "Full-stack task management application with real-time updates, team collaboration features, and advanced project tracking capabilities.",
      technologies: ["React", "Spring Boot", "WebSocket", "Docker", "AWS"],
      liveUrl: "https://taskmanager-demo.netlify.app",
      githubUrl: "https://github.com/Rohit-Yadav-Official/task-manager",
      image: "/api/placeholder/400/300"
    }
  ];
  
  return (
    <section id="projects">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-container">
        {projectList.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link live-link">
                  🌐 Live Demo
                </a>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link github-link">
                  📁 GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;