import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';

import { ErrorMessage, Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { GoogleLogin } from 'react-google-login';

import api from '../../services/api';

import logoImg from '../../assets/images/logo.svg';

import './styles.css';

function RequestPassword() {
  const history = useHistory();
  async function handleLogin(values: any) {
    const response = await api.post('/login', {
      email: values.email,
      password: values.password,
    });

    const { token } = response.data;
    const { name, bio } = response.data.user;

    localStorage.setItem('@proffy:token', token);
    localStorage.setItem('@proffy:name', name);
    history.push('/give-classes');
  }

  const validations = Yup.object().shape({
    email: Yup.string()
      .email('Deve ser um e-mail válido')
      .required('Obrigatório'),
  });

  return (
    <div id="page-req-password">
      <div id="page-req-password-content">
        <div className="req-password-form">
          <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={handleLogin}
            validationSchema={validations}
          >
            <Form className="form">
              <strong>
                Eita, esqueceu
                <br />
                sua senha?
                <p>Não esquenta, vamos dar um jeito nisso.</p>
              </strong>

              <br />
              <br />

              <div className="input-block">
                <label className="form-label">Email</label>
                <Field name="email" className="form-input" />
                <ErrorMessage
                  component="span"
                  name="email"
                  className="form-error-message"
                />
              </div>

              <div className="button-area-req-password">
                <button type="submit">Solicitar link de recuperação</button>
              </div>
            </Form>
          </Formik>
        </div>

        <div className="signup-logo-container">
          <div className="signup-logo">
            <img src={logoImg} alt="Proffy" />
            <h2>Sua plataforma de estudos online.</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RequestPassword;
