import { Router } from 'express';
import userController from '../controllers/user.controller';
import validationUsers from '../middlewares/user.middleware';

const userRouter = Router();
userRouter.post('/users', validationUsers, userController.createUser);
userRouter.post('/login', userController.userLogin);

export default userRouter;