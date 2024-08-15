import React, { useState, useEffect } from "react";
import "./skills.css";
import cicon from "./img/c-sharp.png";
import javaicon from "./img/java.png";
import pythonicon from "./img/python.png";
import reacticon from "./img/react.png";
import jsicon from "./img/js.png";
import htmlicon from "./img/html.png";
import cssicon from "./img/css.png";
import djangoicon from "./img/django.png";

const icons = [
  { src: cicon, name: "C#" },
  { src: javaicon, name: "Java" },
  { src: pythonicon, name: "Python" },
  { src: reacticon, name: "React" },
  { src: jsicon, name: "JavaScript" },
  { src: cssicon, name: "CSS" },
  { src: htmlicon, name: "HTML" },
  { src: djangoicon, name: "Django" }
];

const softSkills = [
  'Problem Solving',
  'Teamwork',
  'Communication',
  'Adaptability'
];

const Skills = () => {
  const [currentIcon, setCurrentIcon] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsFading(true); // Start fading out the current icon
      setTimeout(() => {
        setCurrentIcon((prev) => (prev === icons.length - 1 ? 0 : prev + 1));
        setIsFading(false); // Start fading in the new icon
      }, 500); // Matches the fade-out transition duration
    }, 3000); // 3 seconds interval

    return () => clearInterval(intervalId);
  }, []);

  const handlePrev = () => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentIcon((prev) => (prev === 0 ? icons.length - 1 : prev - 1));
      setIsFading(false);
    }, 500); // Matches the fade-out transition duration
  };

  const handleNext = () => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentIcon((prev) => (prev === icons.length - 1 ? 0 : prev + 1));
      setIsFading(false);
    }, 500); // Matches the fade-out transition duration
  };

  return (
    <section className="skills">
      <div className="skills-content">
        <h2>Skills</h2>
        
        <div className="skills-section">
          <h3>Languages & Frameworks</h3>
          <div className="skill-icon-container">
            <button className="arrow prev" onClick={handlePrev}>
              &lt;
            </button>
            <div className={`skill-icon-info ${isFading ? 'hide' : ''}`}>
              <img src={icons[currentIcon].src} alt={icons[currentIcon].name} className="skill-icon" />
              <p>{icons[currentIcon].name}</p>
            </div>
            <button className="arrow next" onClick={handleNext}>
              &gt;
            </button>
          </div>
        </div>

        <div className="skills-section">
          <h3>Soft Skills</h3>
          <ul className="soft-skills-list">
            {softSkills.map((skill, index) => (
              <li key={index} className="soft-skill">{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
