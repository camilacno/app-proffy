import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import SignUp from './pages/SignUp';
import TeacherList from './pages/TeacherList';
import TeacherForm from './pages/TeacherForm';

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Landing} />
      <Route path="/signup" component={SignUp} />
      <Route path="/study" component={TeacherList} />
      <Route path="/give-classes" component={TeacherForm} />
    </BrowserRouter>
  );
}

export default Routes;
