import {
    addUser,
    getUser,
    passwordReset,
} from './userControllers';
import { 
    addNewAnnouncement,
    getAllAnnouncementsByOwnerId,
    getSpecificAnnouncement,
    getSpecificAnnouncementByStatus,
    adminGetAllAnnouncements,
    userUpdateHisAnnouncement,
    adminChangeAnnouncementStatus,
    adminDeleteAnnouncement,
 } from './announcementControllers';

export default {
    addUser,
    getUser,
    passwordReset,
    addNewAnnouncement,
    getAllAnnouncementsByOwnerId,
    getSpecificAnnouncement,
    getSpecificAnnouncementByStatus,
    adminGetAllAnnouncements,
    userUpdateHisAnnouncement,
    adminChangeAnnouncementStatus,
    adminDeleteAnnouncement,
};