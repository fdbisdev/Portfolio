import "./App.css";
import "./css/reset.css";

import Profile from "./components/Profile/Profile.js";
import CardProjects from "./components/CardProjects/CardProjects.js";
import line from "./assets/img/Vector-1line.png";
import logoPokedex from "./assets/img/logoProject.png";
import logoNotas from "./assets/img/notas.png";
import logoLOL from "./assets/img/lol.png";
import logoIot from "./assets/img/Iot.png";

function App() {
  document.body.style = "background-color: #E5E5E5;";
  return (
    <div className="App">
      <Profile />
      <img className="line" src={line} alt="Line"></img>
      <ul className="Lista">
        <CardProjects
          projectName={"POKEDEX"}
          projectDesc={
            "Uma pequena descrição do projeto para apresentar sobre o que foi feito e as tecnologias utilizadas, tudo que foi aprendido"
          }
          logoProject={logoPokedex}
          projectLink={"https://bis-pcg-pokedex.netlify.app/"}
          technologies={["JavaScript", "HTML5", "CSS3"]}
        ></CardProjects>
        <CardProjects
          projectName={"NOTAS"}
          projectDesc={
            "Uma pequena descrição do projeto para apresentar sobre o que foi feito e as tecnologias utilizadas, tudo que foi aprendido"
          }
          logoProject={logoNotas}
          projectLink={"https://bis-pcg-notas.netlify.app/"}
          technologies={["React"]}
        ></CardProjects>
        <CardProjects
          projectName={"ORÁCULO"}
          projectDesc={
            "Uma pequena descrição do projeto para apresentar sobre o que foi feito e as tecnologias utilizadas, tudo que foi aprendido"
          }
          logoProject={logoLOL}
          projectLink={
            "https://play.google.com/store/apps/details?id=com.oraculolol"
          }
          technologies={["React"]}
        ></CardProjects>
        <CardProjects
          projectName={"IoT Generic Android APP "}
          projectDesc={
            "Uma pequena descrição do projeto para apresentar sobre o que foi feito e as tecnologias utilizadas, tudo que foi aprendido"
          }
          logoProject={logoIot}
          projectLink={"https://github.com/carlostrevisan1/iot-generic-control"}
          technologies={["Java"]}
        ></CardProjects>
      </ul>
    </div>
  );
}

export default App;
