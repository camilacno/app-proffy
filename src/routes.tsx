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
import ResetPassword from './pages/ResetPassword';

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
      <Route path="/forgot-password" component={RequestPassword} />
      <Route
        path="/forgot-password-complete"
        component={RequestPasswordComplete}
      />
      <Route path="/reset-password" component={ResetPassword} />
    </BrowserRouter>
  );
}

export default Routes;
