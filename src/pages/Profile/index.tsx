import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';

import jwt from 'jsonwebtoken';

import { icon } from '@fortawesome/fontawesome-svg-core';
import { array } from 'yup';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';
import authConfig from '../../config/auth';

import api from '../../services/api';

import warningIcon from '../../assets/images/icons/warning.svg';
import backgroundImg from '../../assets/images/success-background.svg';
import cameraIcon from '../../assets/images/icons/camera.png';

import './styles.css';

const token = localStorage.getItem('@proffy:token');

function Profile() {
  const history = useHistory();

  const [currentName, setCurrentName] = useState('');
  const [currentLastName, setCurrentLastName] = useState('');
  const [currentWhatsapp, setCurrentWhatsapp] = useState('');
  const [currentBio, setCurrentBio] = useState('');
  const [currentAvatar, setCurrentAvatar] = useState('');
  const [currentEmail, setCurrentEmail] = useState('');
  const [currentSubject, setCurrentSubject] = useState('');

  const [nameSubmitted, setNameSubmitted] = useState('');
  const [last_nameSubmitted, setLastNameSubmitted] = useState('');
  const [emailSubmitted, setEmailSubmitted] = useState('');
  const [avatarSubmitted, setAvatarSubmitted] = useState('');
  const [whatsappSubmitted, setWhatsappSubmitted] = useState('');
  const [bioSubmitted, setBioSubmitted] = useState('');

  const [subject, setSubject] = useState('');
  const [cost, setCost] = useState('');

  const [scheduleItems, setScheduleItems] = useState([
    { week_day: 0, from: '', to: '' },
  ]);

  async function getCurrentData() {
    if (token) {
      const { id } = (await jwt.verify(token, authConfig.secret)) as any;

      const response = await api.get(`classes/${id}`);
      console.log('rota find classes chamada');

      const currentData = await api.get(`users/${id}`);
      console.log('rota find user chamada');
      const {
        name,
        last_name,
        email,
        avatar,
        whatsapp,
        bio,
      } = await currentData.data;

      setCurrentName(name);
      setCurrentLastName(last_name);
      setCurrentEmail(email);
      setCurrentWhatsapp(whatsapp);
      setCurrentBio(bio);
      setCurrentAvatar(avatar);

      setCurrentSubject(response.data[0].subject);
    }
  }
  getCurrentData();

  function addNewScheduleItem() {
    setScheduleItems([...scheduleItems, { week_day: 0, from: '', to: '' }]);
  }

  function removeNewScheduleItem() {
    if (scheduleItems.length > 1) {
      const itemDelete = scheduleItems.splice(-1, 1);
      setScheduleItems([...scheduleItems]);
      console.log(itemDelete);
    } else {
      alert('Minimo de 1 horário cadastrado');
    }
  }

  function setScheduleItemValue(
    position: number,
    field: string,
    value: string,
  ) {
    const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
      if (index === position) {
        return { ...scheduleItem, [field]: value };
      }

      return scheduleItem;
    });

    setScheduleItems(updatedScheduleItems);
  }

  async function handleUpdateProfile(e: FormEvent) {
    console.log('botão ativou');
    e.preventDefault();

    await api
      .put('users', {
        name: nameSubmitted,
        last_name: last_nameSubmitted,
        email: emailSubmitted,
        whatsapp: whatsappSubmitted,
        bio: bioSubmitted,
        subject,
        cost: Number(cost),
        schedule: scheduleItems,
      })
      .then(() => {
        alert('Tudo certo!');
        history.push('/');
      })
      .catch(error => {
        console.log(error);
        alert('Erro');
      });
    console.log('rota executada');
  }

  return (
    <div id="profile" className="container">
      <PageHeader
        title=" "
        backgroundImg={backgroundImg}
        pageName="Meu perfil"
      />

      <div className="header-container">
        <img src={currentAvatar} alt="" className="picture" />

        <FontAwesomeIcon
          className="camera-img"
          icon={faCamera}
          size="2x"
          color="#04bf58"
        />

        <strong>{currentName}</strong>
        <p>{currentSubject}</p>
      </div>

      <main>
        <form onSubmit={handleUpdateProfile}>
          <fieldset>
            <legend>Seus dados</legend>
            <div className="user-info-db">
              <Input
                name="name"
                label="Nome"
                placeholder={currentName}
                onChange={e => {
                  setNameSubmitted(e.target.value);
                }}
              />

              <Input
                name="last_name"
                label="Sobrenome"
                placeholder={currentLastName}
                onChange={e => {
                  setLastNameSubmitted(e.target.value);
                }}
              />
            </div>

            <div className="user-info-db">
              <Input
                className="email-input"
                name="email"
                label="E-mail"
                placeholder={currentEmail}
                onChange={e => {
                  setEmailSubmitted(e.target.value);
                }}
              />

              <Input
                className="whatsapp"
                name="whatsapp"
                label="WhatsApp"
                placeholder={currentWhatsapp}
                onChange={e => {
                  setWhatsappSubmitted(e.target.value);
                }}
              />
            </div>

            <Textarea
              className="textarea"
              name="bio"
              label="Biografia"
              value={bioSubmitted}
              placeholder={currentBio}
              onChange={e => {
                setBioSubmitted(e.target.value);
              }}
            />
          </fieldset>

          <fieldset>
            <legend>Sobre sua aula</legend>

            <Select
              name="subject"
              label="Matéria"
              value={currentSubject}
              onChange={e => {
                setCurrentSubject(e.target.value);
              }}
              options={[
                { value: 'Literature', label: 'Literature' },
                { value: 'Speech', label: 'Speech' },
                {
                  value: 'Writing or Composition',
                  label: 'Writing or Composition',
                },
                { value: 'Algebra', label: 'Algebra' },
                { value: 'Algebra 2', label: 'Algebra II' },
                { value: 'Geometry', label: 'Geometry' },
                { value: 'World History', label: 'World History' },
                { value: 'Spanish', label: 'Spanish' },
                { value: 'German', label: 'German' },
                { value: 'French', label: 'French' },
                { value: 'Chemistry', label: 'Chemistry' },
                { value: 'Physics', label: 'Physics' },
              ]}
            />
            <Input
              name="cost"
              label="Valor/hora da sua aula"
              value={cost}
              onChange={e => {
                setCost(e.target.value);
              }}
            />
          </fieldset>

          <fieldset>
            <legend>
              Horários disponíveis
              <button type="button" onClick={addNewScheduleItem}>
                + Novo horário
              </button>
            </legend>

            {scheduleItems.map((scheduleItem, index) => {
              return (
                <>
                  <div key={scheduleItem.week_day} className="schedule-item">
                    <Select
                      name="weed_day"
                      label="Dia da Semana"
                      value={scheduleItem.week_day}
                      onChange={e =>
                        setScheduleItemValue(index, 'week_day', e.target.value)
                      }
                      options={[
                        { value: '0', label: 'Sunday' },
                        { value: '1', label: 'Monday' },
                        { value: '2', label: 'Tuesday' },
                        { value: '3', label: 'Wednesday' },
                        { value: '4', label: 'Thursday' },
                        { value: '5', label: 'Friday' },
                        { value: '6', label: 'Saturday' },
                      ]}
                    />
                    <Input
                      name="from"
                      label="De"
                      type="time"
                      value={scheduleItem.from}
                      onChange={e =>
                        setScheduleItemValue(index, 'from', e.target.value)
                      }
                    />
                    <Input
                      name="to"
                      label="até"
                      type="time"
                      value={scheduleItem.to}
                      onChange={e =>
                        setScheduleItemValue(index, 'to', e.target.value)
                      }
                    />
                  </div>
                  <div>
                    <button
                      onClick={removeNewScheduleItem}
                      type="button"
                      className="delete-button"
                    >
                      Excuir Horário
                    </button>
                  </div>
                </>
              );
            })}
          </fieldset>

          <footer>
            <p>
              <img src={warningIcon} alt="Atenção" />
              Importante! <br />
              Preencha todos os campos
            </p>
            <button type="submit">Register Class</button>
          </footer>
        </form>
      </main>
    </div>
  );
}

export default Profile;
