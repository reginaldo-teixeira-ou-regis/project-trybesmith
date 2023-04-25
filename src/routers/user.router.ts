import { Router } from 'express';
import userController from '../controllers/user.controller';
import validationUser from '../middlewares/user.middleware';

const userRouter = Router();
userRouter.post('/users', validationUser, userController.createUser);
userRouter.post('/login', userController.userLogin);

export default userRouter;