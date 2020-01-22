import { Router } from 'express';
import models from '../../models';
import { validateUserData } from '../../middlewares/validations/validateSignupData';

const userRouter = new Router();

userRouter.post('/signup', validateUserData, models.addUser);

export default userRouter;