import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

import { ErrorMessage, Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import api from '../../services/api';

import logoImg from '../../assets/images/logo.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

import './styles.css';

function Login() {
  const eye = <FontAwesomeIcon icon={faEye} />;
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordVisiblity = () => {
    setPasswordShown(!passwordShown);
  };

  const history = useHistory();

  async function handleLogin(values: any) {
    const response = await api.post('login', {
      email: values.email,
      password: values.password,
    });

    const { token } = response.data;
    const { name, bio, whatsapp } = response.data.user;

    localStorage.setItem('@proffy:token', token);
    localStorage.setItem('@proffy:name', name);
    history.push('/');
  }

  const validations = Yup.object().shape({
    email: Yup.string()
      .email('Deve inserir um email válido')
      .required('Obrigatório'),
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
            onSubmit={handleLogin}
            validationSchema={validations}
          >
            <Form className="form">
              <strong>Fazer Login</strong>
              <div className="input-block">
                <label className="form-label">Email</label>
                <Field name="email" className="form-input" />
                <ErrorMessage
                  component="span"
                  name="email"
                  className="form-error-message"
                />
              </div>
              <br />
              <div className="input-block">
                <label className="form-label">Senha</label>
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

              <footer>
                <div className="toggle-proffy">
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round" />
                  </label>
                  <p>Lembrar-me</p>
                </div>
                <Link to="/" className="signup-button">
                  <label>Esqueci minha senha</label>
                </Link>
              </footer>

              <div className="button-area">
                <button type="submit">Login</button>
              </div>
            </Form>
          </Formik>
          <div className="endpage-links">
            <div className="">
              <p>Não tem conta?</p>
              <Link to="/signup" className="endpage-signup">
                <label>Cadastre-se</label>
              </Link>
            </div>
            <div className="endpage-free">
              <p> É de graça</p>
              <img src={purpleHeartIcon} alt="Coração" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
