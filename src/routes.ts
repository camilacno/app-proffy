import express from 'express';

import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';
import UsersController from './controllers/UsersController';
import SessionsController from './controllers/SessionsController';

const routes = express.Router();
const classesControllers = new ClassesController();
const connectionsControllers = new ConnectionsController();
const usersControllers = new UsersController();
const sessionsController = new SessionsController();

routes.post('/login', sessionsController.store);

routes.post('/classes', classesControllers.create);
routes.get('/classes', classesControllers.index);

routes.post('/connections', connectionsControllers.create);
routes.get('/connections', connectionsControllers.index);

routes.post('/users', usersControllers.create);
routes.get('/users', usersControllers.index);

export default routes;
