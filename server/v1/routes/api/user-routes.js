import { Router } from 'express';
import models from '../../models';
import { validateUserData } from '../../middlewares/validations/validateSignupData';
import { validateLoginData } from '../../middlewares/validations/validateLoginData';

const userRouter = new Router();

userRouter.post('/signup', validateUserData, models.addUser);
userRouter.post('/signin', validateLoginData, models.getUser);

export default userRouter;