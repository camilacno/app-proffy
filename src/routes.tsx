import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import SignUpComplete from './pages/SignUpComplete';
import Profile from './pages/Profile';
import TeacherList from './pages/TeacherList';
import TeacherForm from './pages/TeacherForm';
import RequestPasswordComplete from './pages/RequestPasswordComplete';
import RequestPassword from './pages/RequestPassword';

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Landing} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
      <Route path="/signup-complete" component={SignUpComplete} />
      <Route path="/profile" component={Profile} />
      <Route path="/study" component={TeacherList} />
      <Route path="/give-classes" component={TeacherForm} />
      <Route path="/request-password" component={RequestPassword} />
      <Route
        path="/request-password-complete"
        component={RequestPasswordComplete}
      />
    </BrowserRouter>
  );
}

export default Routes;
