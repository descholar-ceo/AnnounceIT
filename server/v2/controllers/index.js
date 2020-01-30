import {
    addUser,
    getUser
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
    addNewAnnouncement,
    getAllAnnouncementsByOwnerId,
    getSpecificAnnouncement,
    getSpecificAnnouncementByStatus,
    adminGetAllAnnouncements,
    userUpdateHisAnnouncement,
    adminChangeAnnouncementStatus,
    adminDeleteAnnouncement,
};