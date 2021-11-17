import "./style.css";

import seta from "../../assets/img/seta.png";
import setaDark from "../../assets/img/setaDark.png";
import javaIcon from "../../assets/img/java.png";
import javaScriptIcon from "../../assets/img/js.svg";
import html5 from "../../assets/img/html.svg";
import css3 from "../../assets/img/css.svg";
import react from "../../assets/img/react.svg";

function CardProjects({
  projectName,
  logoProject,
  projectLink,
  projectDesc,
  technologies,
  isDarkMode,
}) {
  const technologiesIcon = [
    {
      name: "JavaScript",
      icon: javaScriptIcon,
    },
    {
      name: "HTML5",
      icon: html5,
    },
    {
      name: "CSS3",
      icon: css3,
    },
    {
      name: "React",
      icon: react,
    },
    {
      name: "Java",
      icon: javaIcon,
    },
  ];

  return (
    <a href={projectLink} target="_blank" rel="noreferrer">
    <li className="projectCard">
      <div className="card">
        <img src={logoProject} alt="cardProject"></img>
      </div>

      <div className="projectInfo">
        <div className="descCotainer">
          <p className="projectName">{projectName}</p>
          <p className="desc">{projectDesc}</p>
        </div>
        <div className="tecnologies">
          {technologies.map((item, i) => (
            <img
              key={i}
              className="tecnologiesIcon"
              src={technologiesIcon.find((icon) => icon.name === item).icon}
              alt="technologiesIcon"
            ></img>
          ))}
        </div>
      </div>
      <div className="arrowContainer">
        
          {isDarkMode ? <img className="arrow" src={setaDark} alt="arrowLink"></img> 
          : <img className="arrow" src={seta} alt="arrowLink"></img>}
      </div>
      </li>
      </a>
  );
}

export default CardProjects;
