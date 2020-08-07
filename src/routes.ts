import express from 'express';
import ClassesContrtoller from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsContrller';

const routes = express.Router();
const classesController = new ClassesContrtoller();
const connectionsController = new ConnectionsController();

routes.get('/classes', classesController.index);
routes.post('/classes', classesController.create);

routes.get('/connections', connectionsController.index);
routes.post('/connections', connectionsController.create);

export default routes;