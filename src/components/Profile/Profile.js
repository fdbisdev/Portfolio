import "./style.css";

import gitImg from "../../assets/img/gitHubLight.png";
import gitImgDark from "../../assets/img/gitHubDark.png";
import lnkImg from "../../assets/img/linkdln.png";
import logo from "../../assets/img/profileImg.jpg";

function Profile({ isDarkMode }) {
  
  return (
    <>
      <div className="toggleThemeContent">
        <label for="check" className="switchThemeLabel">
          <p className="switchThemeLabelText noselect">🌚</p>
          <p className="switchThemeLabelText noselect">🌞</p>
          <span className="switchThemeBall"></span>
        </label>
      </div>
      <div className="header">
        <div className="imgContainer">
          <img className="profileImg" src={logo} alt="Logo" />
        </div>
        <div className="personalContainer">
          <div className="personal">
            <div className="nameContainer">
              <p className="name">Felipe Bis</p>
            </div>
            <div className="apresentationContainer">
              <p className="apresentation">
                Meu nome é Felipe Bis e sou desenvolvedor Mobile, com
                conhecimentos de aplicações hibridas e nativas. Atualmente
                cursando 8º semestre da graduação em engenharia da computação pelo
                Instituto Federal (IFSP).
              </p>
            </div>
          </div>
          <div className="contact">
            <div className="emailContainer">
              <p className="email">ybislol@gmail.com</p>
            </div>
            <div className="socialMidia">
              <a href="https://github.com/fdbisdev" target="_blank" rel="noreferrer">
               {isDarkMode ?  <img className="imgGit" src={gitImg} alt="Github" /> 
               : 
               <img className="imgGit" src={gitImgDark} alt="Github" />}
              </a>
              <a href="https://www.linkedin.com/in/felipe-bis-3681301b7/">
                <img className="imgLink" src={lnkImg} alt="Linkdln" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
