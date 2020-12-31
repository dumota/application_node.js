import express, {Router} from 'express';
import userController from '../src/controllers/userController';
import SessionController from './controllers/SessionController'
import auth from './middlewares/auth'


const routes = new Router();

routes.post('/users',userController.create);
routes.post('/session',SessionController.create);

//tudo que esta para ccima , não quero autenticação , pra baixo sim
//MIDDLEWARE

routes.use(auth);

routes.get('/users',userController.index);

export default routes;