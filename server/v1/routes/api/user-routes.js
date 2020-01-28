import { Router } from 'express';
import controllers from '../../controllers';
import { validateUserData } from '../../middlewares/validations/validateSignupData';
import { validateLoginData } from '../../middlewares/validations/validateLoginData';

const userRouter = new Router();

userRouter.post('/signup', validateUserData, controllers.addUser);
userRouter.post('/signin', validateLoginData, controllers.getUser);

export default userRouter;