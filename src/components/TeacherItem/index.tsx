import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars0.githubusercontent.com/u/47459889?s=460&v=4"
          alt="Camila Nepomuceno"
        />
        <div>
          <strong>Camila Nepomuceno</strong>
          <span>Confeitaria</span>
        </div>
      </header>

      <p>
        Texto com a bio do professor.
        <br />
        <br />
        Complemento da bio do professor.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$90,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Contato Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
