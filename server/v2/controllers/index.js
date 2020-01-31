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
 
import {
    addFlag,
    getFlagByAnnouncement,
    getFlagByReason
} from './flagControllers';

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
    addFlag,
    getFlagByAnnouncement,
    getFlagByReason
};