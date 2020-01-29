/* eslint-disable no-undef */
import { Router } from 'express';
import controllers from '../../controllers'
import { validateAnnouncementData } from '../../middlewares/validations/validateAnnouncementData';

const announcementRouter = new Router();

announcementRouter.post('/create-announcement', validateAnnouncementData, controllers.addNewAnnouncement);
announcementRouter.get('/get-all-announcement-for-current-user', controllers.getAllAnnouncementsByOwnerId);
announcementRouter.get('/get-specific-announcement/:announcementId', controllers.getSpecificAnnouncement);
announcementRouter.get('/get-specific-announcement-by-status/:announcementStatus', controllers.getSpecificAnnouncementByStatus);
announcementRouter.get('/admin-get-all-announcements-from-all-users', controllers.adminGetAllAnnouncements);
announcementRouter.delete('/admin-delete-announcement/:id', controllers.adminDeleteAnnouncement);
announcementRouter.patch('/admin-change-announcement-status', controllers.adminChangeAnnouncementStatus);
announcementRouter.patch('/user-updates-his-announcement', controllers.userUpdateHisAnnouncement);

export default announcementRouter;