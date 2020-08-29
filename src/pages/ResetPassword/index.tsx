import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

import { ErrorMessage, Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import api from '../../services/api';

import logoImg from '../../assets/images/logo.svg';

function ResetPassword() {
  const eye = <FontAwesomeIcon icon={faEye} />;
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordVisiblity = () => {
    setPasswordShown(!passwordShown);
  };

  const history = useHistory();

  async function handleUpdatePassword(values: any) {
    const response = await api.post('reset-password', {
      email: values.email,
      password: values.password,
      token: values.token,
    });

    history.push('login');
  }

  const validations = Yup.object().shape({
    email: Yup.string()
      .email('Deve inserir um email válido')
      .required('Obrigatório'),
    token: Yup.string().required('Obrigatório'),
    password: Yup.string()
      .min(6, 'Deve ter no mínimo 6 caracteres')
      .required('Obrigatório'),
  });

  return (
    <div id="page-login">
      <div id="page-login-content">
        <div className="login-logo-container">
          <div className="login-logo">
            <img src={logoImg} alt="Proffy" />
            <h2>Sua plataforma de estudos online.</h2>
          </div>
        </div>

        <div className="login-form">
          <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={handleUpdatePassword}
            validationSchema={validations}
          >
            <Form className="form">
              <strong>Atualização de senha</strong>
              <div className="input-block">
                <label className="form-label">E-mail cadastrado</label>
                <Field name="email" className="form-input" />
                <ErrorMessage
                  component="span"
                  name="email"
                  className="form-error-message"
                />
              </div>
              <br />
              <div className="input-block">
                <label className="form-label">
                  Digite aqui o token enviado para seu e-mail
                </label>
                <Field name="email" className="form-input" />
                <ErrorMessage
                  component="span"
                  name="email"
                  className="form-error-message"
                />
              </div>
              <br />
              <div className="input-block">
                <label className="form-label">Nova senha</label>
                <Field
                  name="password"
                  className="form-input"
                  type={passwordShown ? 'text' : 'password'}
                />
                <i onClick={togglePasswordVisiblity}>{eye}</i>

                <ErrorMessage
                  component="span"
                  name="password"
                  className="form-error-message"
                />
              </div>

              <div className="button-area">
                <button type="submit">Atualizar Senha</button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
