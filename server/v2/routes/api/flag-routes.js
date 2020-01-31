import { Router } from 'express';
import controllers from '../../controllers';
import {  validateAnnouncExistance } from '../../middlewares/validations/validateExistanceOfAnnouncement';

const flagRouter = new Router();

flagRouter.post('/add-new-flag', validateAnnouncExistance, controllers.addFlag);
flagRouter.get('/get-flag-by-announcement-id/:announcId', controllers.getFlagByAnnouncement);
flagRouter.get('/get-flag-by-reason/:reason', controllers.getFlagByReason);

export default flagRouter;