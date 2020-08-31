import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff, faHeart } from '@fortawesome/free-solid-svg-icons';

import api from '../../services/api';

import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';
import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';

import './styles.css';

function Landing(): JSX.Element {
  const history = useHistory();

  const [totalConnections, setTotalConnections] = useState(0);

  useEffect(() => {
    api.get('connections').then(res => {
      const { total } = res.data;

      setTotalConnections(total);
    });
  }, []);

  async function handleLogout() {
    console.log('logout chamado');
    localStorage.removeItem('@proffy:token');
    localStorage.removeItem('@proffy:name');
    history.push('/login');
  }

  return (
    <>
      <div id="page-landing">
        <div id="page-landing-content" className="container">
          <div className="top-bar-home">
            <div className="user-info">
              <a href="/profile">
                <img
                  src="https://avatars0.githubusercontent.com/u/47459889?s=460&v=4"
                  alt="Avatar"
                  className=""
                />
                <p>Camila</p>
                <p>Nepomuceno</p>
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
    </>
  );
}

export default Landing;
