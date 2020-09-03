import React, { useState } from 'react';
import jwt from 'jsonwebtoken';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';
import authConfig from '../../config/auth';

import logoImg from '../../assets/images/logo.svg';

import './styles.css';

const token = localStorage.getItem('@proffy:token');

function Nav() {
  const history = useHistory();

  const [currentName, setCurrentName] = useState('');
  const [currentLastName, setCurrentLastName] = useState('');
  const [currentAvatar, setCurrentAvatar] = useState(logoImg);

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

  async function handleSignOut() {
    localStorage.removeItem('@proffy:token');
    localStorage.removeItem('@proffy:name');

    history.push('/');
  }

  if (token) {
    return (
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
          onClick={handleSignOut}
        />
      </div>
    );
  }
  return (
    <div className="top-bar-home">
      <div className="user-info">
        <a href="/signup">
          <strong>Cadastre-se!</strong>
        </a>
      </div>
    </div>
  );
}
export default Nav;
