import { addUser, getUser } from '../models/userModels';
import {
    addNewAnnouncement,
    getAllAnnouncementsByOwnerId,
    getSpecificAnnouncement
} from '../models/announcementModels';

export default {
    addUser,
    getUser,
    addNewAnnouncement,
    getAllAnnouncementsByOwnerId,
    getSpecificAnnouncement
};