import React from 'react';

import sucessImg from '../../assets/images/icons/success-check-icon.svg';

function RequestPasswordComplete() {
  return (
    <div id="page-signup-complete">
      <div className="signup-container">
        <img src={sucessImg} alt="Check" />
        <strong>Redefinição enviada!</strong>
        <p>
          Boa, agora é só checar o e-mail que foi enviado para você redefinir
          <br />
          sua senha e aproveitar os estudos.
        </p>
        <button type="button">
          <a href="/login">Fazer login</a>
        </button>
      </div>
    </div>
  );
}

export default RequestPasswordComplete;
