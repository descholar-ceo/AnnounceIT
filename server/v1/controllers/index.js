import { addUser, getUser } from '../controllers/userControllers';
import {
    addNewAnnouncement,
    getAllAnnouncementsByOwnerId,
    getSpecificAnnouncement,
    getSpecificAnnouncementByStatus,
    adminGetAllAnnouncements,
    adminDeleteAnnouncement,
    adminChangeAnnouncementStatus,
    userUpdateHisAnnouncement
} from '../controllers/announcementControllers';

export default {
    addUser,
    getUser,
    addNewAnnouncement,
    getAllAnnouncementsByOwnerId,
    getSpecificAnnouncement,
    getSpecificAnnouncementByStatus,
    adminGetAllAnnouncements,
    adminDeleteAnnouncement,
    adminChangeAnnouncementStatus,
    userUpdateHisAnnouncement
};