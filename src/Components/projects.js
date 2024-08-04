import React from "react";
import "./projects.css";
const projects = [
    {
      title: "Scientific Calculator",
      description: "Developed a scientific calculator using HTML, CSS, and JavaScript.",
      technologies: "HTML, CSS, JavaScript",
      role: "Front-end and logic implementation."
    },
    {
      title: "Appointment Scheduling Website",
      description: "Collaborated on building an appointment scheduling website with a front end using HTML, CSS, and JavaScript, and a back end using PHP and Microsoft SQL Server.",
      technologies: "HTML, CSS, JavaScript, PHP, Microsoft SQL Server",
      role: "Full-stack development."
    },
    {
      title: "Desktop Application",
      description: "Developed a desktop application to accompany the appointment scheduling website using C#.",
      technologies: "C#",
      role: "Software development and integration."
    }
  ];
const Projects =()=>{
    return(
        <div className="projects">
            <div className="projects-content">
        <h2>My Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p><strong>Technologies Used:</strong> {project.technologies}</p>
              <p><strong>Role:</strong> {project.role}</p>
            </div>
          ))}
      </div>
      </div>
        </div>
    );
};

export default Projects;