import { addUser, getUser } from '../models/userModels';
import {
    addNewAnnouncement,
    getAllAnnouncementsByOwnerId
} from '../models/announcementModels';

export default {
    addUser,
    getUser,
    addNewAnnouncement,
    getAllAnnouncementsByOwnerId
};