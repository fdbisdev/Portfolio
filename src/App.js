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
            "Um site criado para representar uma Pokédex, ou seja, listar todos os pokemons que são distribuidos por uma API. Criado com HTML5, CSS3, e JavaScript, com o intuito de estudar responsividade web (mobile first) e consumo de Rest API."
          }
          logoProject={logoPokedex}
          projectLink={"https://bis-pcg-pokedex.netlify.app/"}
          technologies={["JavaScript", "HTML5", "CSS3"]}
        ></CardProjects>
        <CardProjects
          projectName={"NOTAS"}
          projectDesc={
            "Um site criado para adicionar suas Notas, uma lista de afazeres separados por categoria. Criado com ReactJS, com o intuito de estudar o framework e salvamento no local storage do navegador."
          }
          logoProject={logoNotas}
          projectLink={"https://bis-pcg-notas.netlify.app/"}
          technologies={["React"]}
        ></CardProjects>
        <CardProjects
          projectName={"ORÁCULO APP"}
          projectDesc={
            "Um aplicativo criado para listar usuários de League of Legends, mostrando assim, suas partidas. Criado com React Native, com o intuito de estudar aplicações móveis e o consumo de REST API disponibilizada pela Riot Games."
          }
          logoProject={logoLOL}
          projectLink={
            "https://play.google.com/store/apps/details?id=com.oraculolol"
          }
          technologies={["React"]}
        ></CardProjects>
        <CardProjects
          projectName={"IOT GENERIC ANDROID APP "}
          projectDesc={
            "Um aplicativo criado para controlar sistemas integrados com microcontroladores, utilizando uma conexão MQTT. Criado em Java para Android, com o intuito de estudar aplicações android nativo e conexão MQTT."
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
