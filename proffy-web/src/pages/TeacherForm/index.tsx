import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';
import jwt from 'jsonwebtoken';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';
import authConfig from '../../config/auth';

import api from '../../services/api';

import warningIcon from '../../assets/images/icons/warning.svg';
import rocketIcon from '../../assets/images/icons/rocket.svg';

import './styles.css';

const token = localStorage.getItem('@proffy:token');

function TeacherForm() {
  const history = useHistory();

  const [currentName, setCurrentName] = useState('');
  const [currentLastName, setCurrentLastName] = useState('');
  const [currentWhatsapp, setCurrentWhatsapp] = useState('');
  const [currentBio, setCurrentBio] = useState('');
  const [currentAvatar, setCurrentAvatar] = useState('');

  const [nameSubmitted, setNameSubmitted] = useState('');
  const [last_nameSubmitted, setLastNameSubmitted] = useState('');
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

      const currentData = await api.get(`users/${id}`);
      console.log('rota find chamada pelo front');
      const { name, last_name, avatar, whatsapp, bio } = await currentData.data;
      setCurrentName(name);
      setCurrentLastName(last_name);
      setCurrentWhatsapp(whatsapp);
      setCurrentBio(bio);
      setCurrentAvatar(avatar);
    }
  }
  getCurrentData();
  // const userShown = `${currentName} ${currentLastName}`;
  // console.log(userShown);

  function addNewScheduleItem() {
    setScheduleItems([...scheduleItems, { week_day: 0, from: '', to: '' }]);
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

  console.log(currentName);

  async function handleCreateClass(e: FormEvent) {
    console.log('botão ativou');
    e.preventDefault();

    await api
      .post('give-classes', {
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
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="Que incrível que você quer dar aulas."
        description="O primeiro passo é preencher esse formulário de inscrição."
        iconImg={rocketIcon}
        iconText="Prepare-se! Vai ser incrível."
      />

      <main>
        <form onSubmit={handleCreateClass}>
          <fieldset>
            <legend>Seus dados</legend>
            <div className="user-info-db">
              <img
                src="https://avatars0.githubusercontent.com/u/47459889?s=460&v=4"
                alt="Avatar"
              />
              <Input
                className="user-name"
                name="name"
                label=""
                value={currentName}
                placeholder={currentName}
                onChange={e => {
                  setNameSubmitted(e.target.value);
                }}
              />

              <Input
                className="whatsapp"
                name="whatsapp"
                label="Whatsapp"
                placeholder={currentWhatsapp}
                onChange={e => {
                  setWhatsappSubmitted(e.target.value);
                }}
              />
            </div>

            <Textarea
              name="bio"
              label="Biografia"
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
              value={subject}
              onChange={e => {
                setSubject(e.target.value);
              }}
              options={[
                { value: 'Literatura', label: 'Literatura' },
                { value: 'Inglês', label: 'Inglês' },
                { value: 'Matemática', label: 'Matemática' },
                { value: 'Geometria', label: 'Geometria' },
                { value: 'História', label: 'História' },
                { value: 'Espanhol', label: 'Espanhol' },
                { value: 'Alemão', label: 'Alemão' },
                { value: 'Francês', label: 'Francês' },
                { value: 'Química', label: 'Química' },
                { value: 'Física', label: 'Física' },
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
                <div key={scheduleItem.week_day} className="schedule-item">
                  <Select
                    name="weed_day"
                    label="Dia da Semana"
                    value={scheduleItem.week_day}
                    onChange={e =>
                      setScheduleItemValue(index, 'week_day', e.target.value)
                    }
                    options={[
                      { value: '0', label: 'Domingo' },
                      { value: '1', label: 'Segunda-feira' },
                      { value: '2', label: 'Terça-feira' },
                      { value: '3', label: 'Quarta-feira' },
                      { value: '4', label: 'Quinta-feira' },
                      { value: '5', label: 'Sexta-feiraa' },
                      { value: '6', label: 'Sábado' },
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
              );
            })}
          </fieldset>

          <footer>
            <p>
              <img src={warningIcon} alt="Atenção" />
              Importante! <br />
              Preencha todos os campos
            </p>
            <button type="submit">Criar aula</button>
          </footer>
        </form>
      </main>
    </div>
  );
}

export default TeacherForm;
