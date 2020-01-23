import { Router } from 'express';
import models from '../../models'
import { validateAnnouncementData } from '../../middlewares/validations/validateAnnouncementData';

const announcementRouter = new Router();

announcementRouter.post('/create-announcement', validateAnnouncementData ,models.addNewAnnouncement);

export default announcementRouter;