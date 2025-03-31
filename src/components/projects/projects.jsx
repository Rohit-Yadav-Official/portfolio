

import './projects.css';

const Projects = () => {
  const projectList = [
    { id: 1, title: "Project 1", description: "Description for project 1" },
    { id: 2, title: "Project 2", description: "Description for project 2" },
    { id: 3, title: "Project 3", description: "Description for project 3" },
    { id: 4, title: "Project 4", description: "Description for project 4" },
    { id: 5, title: "Project 5", description: "Description for project 5" },
    { id: 6, title: "Project 6", description: "Description for project 6" },
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
