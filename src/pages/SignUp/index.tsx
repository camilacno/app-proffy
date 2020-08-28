import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

import { ErrorMessage, Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import api from '../../services/api';

import logoImg from '../../assets/images/logo.svg';

import './styles.css';

function SignUp() {
  const history = useHistory();

  const eye = <FontAwesomeIcon icon={faEye} />;
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordVisiblity = () => {
    setPasswordShown(!passwordShown);
  };

  async function handleLogin(values: any) {
    const response = await api.post('users', {
      name: values.name,
      last_name: values.last_name,
      whatsapp: values.whatsapp,
      is_proffy: values.is_proffy,
      email: values.email,
      password: values.password,
    });

    if ((values.is_proffy = true)) {
      history.push('/give-classes');
    }
    history.push('/signup-complete');
  }

  const validations = Yup.object().shape({
    name: Yup.string().required('Obrigatório'),
    last_name: Yup.string(),
    whatsapp: Yup.string(),
    email: Yup.string()
      .email('Deve ser um email válido')
      .required('Obrigatório'),
    password: Yup.string()
      .min(6, 'Deve ter no mínimo 6 caracteres')
      .required('Obrigatório'),
  });

  const initialValues = {
    name: '',
    last_name: '',
    whatsapp: '',
    email: '',
    password: '',
    is_proffy: false,
  };

  return (
    <div id="page-signup">
      <div id="page-signup-content">
        <div className="signup-form">
          <Formik
            initialValues={initialValues}
            onSubmit={handleLogin}
            validationSchema={validations}
          >
            <Form className="form">
              <strong>
                Cadastro
                <p>
                  Preencha os dados abaixo <br /> para começar.
                </p>
              </strong>

              <div className="input-group">
                <div className="input-block">
                  <label className="form-label">Nome</label>
                  <Field name="name" className="form-input" />
                  <ErrorMessage
                    component="span"
                    name="name"
                    className="form-error-message"
                  />
                </div>
                <div className="input-block">
                  <label className="form-label">Sobrenome</label>
                  <Field name="last_name" className="form-input" />
                  <ErrorMessage
                    component="span"
                    name="last_name"
                    className="form-error-message"
                  />
                </div>
              </div>

              <div className="input-group">
                <div className="input-block">
                  <label className="form-label">Whatsapp</label>
                  <Field name="whatsapp" className="form-input" />
                  <ErrorMessage
                    component="span"
                    name="whatsapp"
                    className="form-error-message"
                  />
                </div>

                <div className="toggle-proffy">
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round" />
                  </label>
                  <p>Cadastrar como Proffy?</p>
                </div>
              </div>

              <div className="input-block">
                <label className="form-label">E-mail</label>
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

              <div className="button-area">
                <button type="submit">Cadastrar</button>
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

export default SignUp;
