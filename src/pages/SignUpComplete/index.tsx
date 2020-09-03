import React from 'react';

import sucessImg from '../../assets/images/icons/success-check-icon.svg';

import './styles.css';

function SignUpComplete() {
  return (
    <div id="page-signup-complete">
      <div className="signup-container">
        <img src={sucessImg} alt="Check" />
        <strong>Cadastro concluído com sucesso</strong>
        <p>
          Agora você faz parte da plataforma da Proffy. <br />
          Tenha uma ótima experiência.
        </p>
        <button type="button">
          <a href="/login">Fazer login</a>
        </button>
      </div>
    </div>
  );
}

export default SignUpComplete;
