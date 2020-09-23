import express from 'express';

import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';
import UsersController from './controllers/UsersController';
import SessionsController from './controllers/SessionsController';

import authMiddleware from './middlewares/auth';

const routes = express.Router();
const classesControllers = new ClassesController();
const connectionsControllers = new ConnectionsController();
const usersControllers = new UsersController();
const sessionsController = new SessionsController();

routes.post('/login', sessionsController.login);
routes.post(
  '/forgot-password',
  authMiddleware,
  sessionsController.forgotPassword,
);
routes.post('/reset-password', sessionsController.resetPassword);

routes.get('/classes', classesControllers.find);
routes.get('/classes/:id', classesControllers.index);
routes.post('/give-classes', authMiddleware, classesControllers.create);

routes.post('/connections', connectionsControllers.create);
routes.get('/connections', connectionsControllers.index);

routes.post('/users', usersControllers.create);
routes.get('/users', usersControllers.index);
routes.get('/users/:id', usersControllers.find);
routes.put('/users', authMiddleware, usersControllers.update);

export default routes;
