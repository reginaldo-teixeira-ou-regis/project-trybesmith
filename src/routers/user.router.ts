import { Router } from 'express';
import userController from '../controllers/user.controller';
import validationUsers from '../middlewares/validationUsers';

const userRouter = Router();
userRouter.post('/users', validationUsers, userController.createUser);
userRouter.post('/login', userController.login);

export default userRouter;