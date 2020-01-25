import { addUser, getUser } from '../models/userModels';
import {
    addNewAnnouncement,
    getAllAnnouncementsByOwnerId,
    getSpecificAnnouncement,
    getSpecificAnnouncementByStatus,
    adminGetAllAnnouncements,
    adminDeleteAnnouncement,
    adminChangeAnnouncementStatus,
    userUpdateHisAnnouncement
} from '../models/announcementModels';

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