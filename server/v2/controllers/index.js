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
 
import {
    addFlag,
    getFlagByAnnouncement,
    getFlagByReason
} from './flagControllers';

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
    addFlag,
    getFlagByAnnouncement,
    getFlagByReason
};