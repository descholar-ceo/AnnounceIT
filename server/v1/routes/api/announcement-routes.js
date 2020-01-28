/* eslint-disable no-undef */
import { Router } from 'express';
import models from '../../models'
import { validateAnnouncementData } from '../../middlewares/validations/validateAnnouncementData';

const announcementRouter = new Router();

announcementRouter.post('/create-announcement', validateAnnouncementData, models.addNewAnnouncement);
announcementRouter.get('/get-all-announcement-for-current-user', models.getAllAnnouncementsByOwnerId);
announcementRouter.get('/get-specific-announcement/:announcementId', models.getSpecificAnnouncement);
announcementRouter.get('/get-specific-announcement-by-status/:announcementStatus', models.getSpecificAnnouncementByStatus);
announcementRouter.get('/admin-get-all-announcements-from-all-users', models.adminGetAllAnnouncements);
announcementRouter.delete('/admin-delete-announcement/:id', models.adminDeleteAnnouncement);
announcementRouter.patch('/admin-change-announcement-status', models.adminChangeAnnouncementStatus);
announcementRouter.patch('/user-updates-his-announcement', models.userUpdateHisAnnouncement);

export default announcementRouter;