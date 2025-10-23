
import html from "../../assets/html.png";
import css from "../../assets/css1.png";
import react1 from "../../assets/react.png";
import git from "../../assets/github.png";
import spring from "../../assets/spring.png";
import docker from "../../assets/docker.png";
import azure from "../../assets/azure.png";
import postgres from "../../assets/postgres.png";
import "./skills.css";

const Skills = () => {
  const skills1 = [
    { name: "HTML", img: html, progress: "80%" },
    { name: "CSS", img: css, progress: "50%" },
    { name: "React", img: react1, progress: "70%" },
    { name: "Git", img: git, progress: "60%" },
  ];

  const skills2 = [
    { name: "Spring Boot", img: spring, progress: "80%" },
    { name: "Postgres SQL", img: postgres, progress: "80%" },
    { name: "Docker", img: docker, progress: "80%" },
    { name: "Azure", img: azure, progress: "80%" },
  ];

  return (
    <section id="skills" className="skill">
      <div className="colum1">
        {skills1.map((skill) => (
          <div key={skill.name}>
            <img 
              src={skill.img} 
              alt={`Rohit Yadav ${skill.name} Skill - Backend Developer`}
              title={`${skill.name} expertise by Rohit Yadav`}
            />
            <div style={{ flex: 1 }}>
              <span>{skill.name}</span>
              <div className="progress-container">
                <div
                  className="progress-bar"
                  style={{ width: skill.progress }}
                ></div>
              </div>
            </div>
            <span>{skill.progress}</span>
          </div>
        ))}
      </div>

      <div className="colum2">
        {skills2.map((skill) => (
          <div key={skill.name}>
            <img 
              src={skill.img} 
              alt={`Rohit Yadav ${skill.name} Skill - Backend Developer`}
              title={`${skill.name} expertise by Rohit Yadav`}
            />
            <div style={{ flex: 1 }}>
              <span>{skill.name}</span>
              <div className="progress-container">
                <div
                  className="progress-bar"
                  style={{ width: skill.progress }}
                ></div>
              </div>
            </div>
            <span>{skill.progress}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
