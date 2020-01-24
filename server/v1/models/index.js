import { addUser, getUser } from '../models/userModels';
import {
    addNewAnnouncement,
    getAllAnnouncementsByOwnerId,
    getSpecificAnnouncement,
    getSpecificAnnouncementByStatus,
    adminGetAllAnnouncements,
<<<<<<< HEAD
    adminDeleteAnnouncement,
    adminChangeAnnouncementStatus,
=======
    userUpdateHisAnnouncement
>>>>>>> feat(user-update-announcement):User update the details of announcement
} from '../models/announcementModels';

export default {
    addUser,
    getUser,
    addNewAnnouncement,
    getAllAnnouncementsByOwnerId,
    getSpecificAnnouncement,
    getSpecificAnnouncementByStatus,
    adminGetAllAnnouncements,
<<<<<<< HEAD
    adminDeleteAnnouncement,
    adminChangeAnnouncementStatus
=======
    userUpdateHisAnnouncement
>>>>>>> feat(user-update-announcement):User update the details of announcement
};