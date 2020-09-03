import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff, faHeart } from '@fortawesome/free-solid-svg-icons';
import jwt from 'jsonwebtoken';

import api from '../../services/api';

import authConfig from '../../config/auth';

import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';
import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';

import './styles.css';

const token = localStorage.getItem('@proffy:token');

function Landing(): JSX.Element {
  const history = useHistory();

  const [totalConnections, setTotalConnections] = useState(0);
  const [currentName, setCurrentName] = useState('');
  const [currentLastName, setCurrentLastName] = useState('');
  const [currentAvatar, setCurrentAvatar] = useState(logoImg);

  useEffect(() => {
    api.get('connections').then(res => {
      const { total } = res.data;

      setTotalConnections(total);
    });
  }, []);

  async function getCurrentData() {
    if (token) {
      const { id } = (await jwt.verify(token, authConfig.secret)) as any;

      const currentData = await api.get(`users/${id}`);
      console.log('rota find user chamada');
      const { name, last_name, avatar } = await currentData.data;

      setCurrentName(name);
      setCurrentLastName(last_name);
      setCurrentAvatar(avatar);
    }
  }

  getCurrentData();

  async function handleLogout() {
    console.log('logout chamado');
    localStorage.removeItem('@proffy:token');
    localStorage.removeItem('@proffy:name');
    history.push('/login');
  }

  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="top-bar-home">
          <div className="user-info">
            <a href="/profile">
              <img src={currentAvatar} alt="Avatar" className="" />
              <p>{currentName}</p>
              <p>{currentLastName}</p>
            </a>
          </div>

          <FontAwesomeIcon
            className="camera-img"
            icon={faPowerOff}
            size="2x"
            color="#6842c2"
            onClick={handleLogout}
          />
        </div>

        <main>
          <div className="logo-container">
            <img src={logoImg} alt="Proffy" />
            <h2>Sua plataforma de estudos online.</h2>
          </div>

          <img
            src={landingImg}
            alt="Plataforma de estudos"
            className="hero-image"
          />
        </main>

        <footer>
          <div className="footer-messages">
            <p>
              <b>Seja bem vindo.</b> <br />O que deseja fazer?
            </p>
            <div className="total-connections">
              Total de {totalConnections} conexões <br />
              <div>
                já realizadas
                <FontAwesomeIcon icon={faHeart} size="1x" color="#6842c2" />
              </div>
            </div>
          </div>

          <div className="buttons-container">
            <Link to="/study" className="study">
              <img src={studyIcon} alt="Estudar" />
              Estudar
            </Link>

            <Link to="/give-classes" className="give-classes">
              <img src={giveClassesIcon} alt="Ensinar" />
              Dar aulas
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Landing;
