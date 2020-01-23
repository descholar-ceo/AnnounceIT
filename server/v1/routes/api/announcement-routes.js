import { Router } from 'express';
import {  authenticate } from '../../middlewares/authentication/authenticate';
import models from '../../models'
import { validateAnnouncementData } from '../../middlewares/validations/validateAnnouncementData';

const announcementRouter = new Router();

announcementRouter.post('/create-announcement', validateAnnouncementData ,models.addNewAnnouncement);
announcementRouter.get('/get-all-announcement-for-current-user',
    authenticate, models.getAllAnnouncementsByOwnerId);

export default announcementRouter;