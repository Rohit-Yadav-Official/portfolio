import './projects.css';

const Projects = () => {
  const projectList = [
    { id: 1, title: "Project 1", description: "Description for project 1" },
    { id: 2, title: "Project 1", description: "Description for project 1" },
    { id: 3, title: "Project 1", description: "Description for project 1" },
   
    { id: 4, title: "Project 1", description: "Description for project 1" },
   
   
  ];
  
  return (
    <section id="projects">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-container">
        {projectList.map((project) => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;