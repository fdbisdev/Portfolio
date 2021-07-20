import "./style.css";

import gitImg from "../../assets/img/gitHub.png";
import lnkImg from "../../assets/img/linkdln.png";
import logo from "../../assets/img/profileImg.jpg";

function Profile() {
  return (
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
              cursando 7º semestre da graduação em engenharia da computação pelo
              Instituto Federal (IFSP).
            </p>
          </div>
        </div>
        <div className="contact">
          <div className="emailContainer">
            <p className="email">ybislol@gmail.com</p>
          </div>
          <div className="socialMidia">
            <a href="https://github.com/fdbisdev">
              <img className="imgGit" src={gitImg} alt="Github" />
            </a>
            <a href="https://www.linkedin.com/in/felipe-bis-3681301b7/">
              <img className="imgLink" src={lnkImg} alt="Linkdln" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
