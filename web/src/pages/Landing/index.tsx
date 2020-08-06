import React from 'react'
import { Link } from 'react-router-dom'

import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';

import studyIcon from '../../assets/images/icons/study.svg';
import giveClasses from '../../assets/images/icons/give-classes.svg';
import purpleHeart from '../../assets/images/icons/purple-heart.svg';

import './styles.css';

function Landing() {
  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={logoImg} alt="Proffy" />
          <h2>Sua Plataforma de Estudos Online</h2>
        </div>
        <img src={landingImg} alt="heroImg" className="hero-image" />
        <div className="buttons-container">
          <Link to="/study" className="study">
            <img src={studyIcon} alt="Estudar" /> Estudar </Link>

          <Link to="/give-classes" className=" give-classes">
            <img src={giveClasses} alt="Dar Aula" /> Dar Aula
          </Link>
        </div>
        <span className="total-connections">
          Total de 200 Conexões já realizadas <img src={purpleHeart} alt="Purple Heart"></img>
        </span>
      </div>
    </div >
  )
}
export default Landing;