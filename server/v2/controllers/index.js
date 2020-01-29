import { addUser, getUser } from './userControllers';
import {
    addNewAnnouncement,
    getAllAnnouncementsByOwnerId,
    getSpecificAnnouncement,
    getSpecificAnnouncementByStatus,
    adminGetAllAnnouncements,
    adminDeleteAnnouncement,
    adminChangeAnnouncementStatus,
    userUpdateHisAnnouncement
} from './announcementControllers';

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