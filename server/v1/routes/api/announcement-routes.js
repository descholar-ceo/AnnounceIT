/* eslint-disable no-undef */
import { Router } from 'express';
import {  authenticate } from '../../middlewares/authentication/authenticate';
import models from '../../models'
import { validateAnnouncementData } from '../../middlewares/validations/validateAnnouncementData';

const announcementRouter = new Router();

announcementRouter.post('/create-announcement',
    authenticate, validateAnnouncementData, models.addNewAnnouncement);


announcementRouter.get('/get-all-announcement-for-current-user',
    authenticate, models.getAllAnnouncementsByOwnerId);
announcementRouter.get('/get-specific-announcement/:announcementId',
    authenticate, models.getSpecificAnnouncement);
announcementRouter.get('/get-specific-announcement-by-status/:announcementStatus',
    authenticate, models.getSpecificAnnouncementByStatus);
announcementRouter.get('/admin-get-all-announcements-from-all-users',
    authenticate, models.adminGetAllAnnouncements);
announcementRouter.delete('/admin-delete-announcement/:id', authenticate, models.adminDeleteAnnouncement);
announcementRouter.patch('/admin-change-announcement-status', authenticate, models.adminChangeAnnouncementStatus);

export default announcementRouter;