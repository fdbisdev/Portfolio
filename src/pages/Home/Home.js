import React from 'react';

import Profile from "../../components/Profile/Profile.js";
import CardProjects from "../../components/CardProjects/CardProjects.js";
import line from "../../assets/img/Vector-1line.png";
import logoPokedex from "../../assets/img/logoProject.png";
import logoNotas from "../../assets/img/notas.png";
import logoLOL from "../../assets/img/lol.png";
import logoIot from "../../assets/img/Iot.png";
import logoTMDB from '../../assets/img/tmdb.png'
import logoRealEstate from '../../assets/img/realEstate.png'
import pokemonJS from '../../assets/img/pokemonJS.png'

function Home({ isDarkMode }){
    return (
    <div className="App">
      <Profile isDarkMode={isDarkMode}/>
      <img className="line" src={line} alt="Line"></img>
      <ul className="Lista">
        <CardProjects
          isDarkMode={isDarkMode}
          projectName={"POKEDEX"}
          projectDesc={
            "Um site criado para representar uma Pokédex, ou seja, listar todos os pokemons que são distribuidos por uma API. Criado com HTML5, CSS3, e JavaScript, com o intuito de estudar responsividade web (mobile first) e consumo de REST API."
          }
          logoProject={logoPokedex}
          projectLink={"https://bis-pcg-pokedex.netlify.app/"}
          technologies={["JavaScript", "HTML5", "CSS3"]}
        ></CardProjects>
        <CardProjects
          isDarkMode={isDarkMode}
          projectName={"NOTAS"}
          projectDesc={
            "Um site criado para adicionar suas Notas, uma lista de afazeres separados por categoria. Criado com ReactJS, com o intuito de estudar o framework e salvamento no local storage do navegador."
          }
          logoProject={logoNotas}
          projectLink={"https://bis-pcg-notas.netlify.app/"}
          technologies={["React"]}
        ></CardProjects>
        <CardProjects
          isDarkMode={isDarkMode}
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
          isDarkMode={isDarkMode}
          projectName={"IOT GENERIC ANDROID APP "}
          projectDesc={
            "Um aplicativo criado para controlar sistemas integrados com microcontroladores, utilizando uma conexão MQTT. Criado em Java para Android, com o intuito de estudar aplicações android nativo e conexão MQTT."
          }
          logoProject={logoIot}
          projectLink={"https://github.com/carlostrevisan1/iot-generic-control"}
          technologies={["Java"]}
        ></CardProjects>
        <CardProjects
          isDarkMode={isDarkMode}
          projectName={"TMDB MOVIE APP "}
          projectDesc={
            "Um aplicativo criado para listar os filmes que estão em cartaz nos cinemas. Criado com React Native utilizando TypeScript, e consumindo a REST API disponibilizada pelo The Movie Database."
          }
          logoProject={logoTMDB}
          projectLink={"https://github.com/fdbisdev/desafio-mobile"}
          technologies={["React"]}
        ></CardProjects>
        <CardProjects
          isDarkMode={isDarkMode}
          projectName={"REAL ESTATE APP "}
          projectDesc={
            "Um aplicativo criado para listar apartamentos e casas que estão a venda, exibindo detalhes e campo para busca. Criado com React Native utilizando TypeScript, e consumindo a REST API disponibilizada pela KeyCash."
          }
          logoProject={logoRealEstate}
          projectLink={"https://github.com/fdbisdev/keycash-frontend-felipe-bis"}
          technologies={["React"]}
        ></CardProjects>
        <CardProjects
          isDarkMode={isDarkMode}
          projectName={"Javascript Game"}
          projectDesc={
            "Um jogo criado com HTML, Javascript, CSS3 e canvas, para simular um jogo de batalha entre dois personagens, no estilo Pokemon. Criado com o intuito de estudar a utilização de canvas e javascript."
          }
          logoProject={pokemonJS}
          projectLink={"https://fdbisdev-pokemon-js.vercel.app/"}
          technologies={["JavaScript", "HTML5", "CSS3"]}
        >
        </CardProjects>
      </ul>
    </div>
    );
}

export default Home

