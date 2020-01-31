import { Router } from 'express';
import controllers from '../../controllers';
import { validateUserData } from '../../middlewares/validations/validateSignupData';
import { validateLoginData } from '../../middlewares/validations/validateLoginData';
import { authenticate } from '../../middlewares/authentication/authenticate';

const userRouter = new Router();

userRouter.post('/signup', validateUserData, controllers.addUser);
userRouter.post('/signin', validateLoginData, controllers.getUser);
userRouter.patch('/add-user-to-blacklist', authenticate, controllers.addUserToBlacklist);

export default userRouter;