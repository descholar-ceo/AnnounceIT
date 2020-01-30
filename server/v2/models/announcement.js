import {
    ADD_NEW_ANNOUNCEMENT,
    GET_ALL_ANNOUNCEMENTS_FOR_CURRENT_USER,
    GET_ANNOUNCEMENT_BY_ID,
    GET_ANNOUNCEMENT_BY_STATUS,
    GET_ALL_ANNOUNCEMENTS,
    DELETE_ANNOUNCEMENT,
    UPDATE_ANNOUNCEMENT_STATUS,
    USER_UPDATE_HIS_ANNOUNCEMENT
} from "./configs/queries";
import connect from "./configs/connect-db";

class Announcements{

    // adding new
    async addNewAnnouncement(announcement) {
        const {
            announcementowner,
            announcementstatus,
            annoucemmenttext,
            announcementstartdate,
            announcementsenddate
        } = announcement;
        const queryString = {
            text: ADD_NEW_ANNOUNCEMENT,
            values: [
                announcementowner,
                announcementstatus,
                annoucemmenttext,
                new Date(announcementstartdate),
                new Date(announcementsenddate)]
        };
       
        const {rows} = await connect.query(queryString);
        
        return rows;
    }

    // all for a currently logged in user
    async getAllAnnouncementsByOwnerId(owner) {
        const { rows } = await connect.query({ text: GET_ALL_ANNOUNCEMENTS_FOR_CURRENT_USER, values: [owner] });
        return rows;
    }

    // by id
    async getSpecificAnnouncementById(announcID, userID) {
        const { rows } = await connect.query({ text: GET_ANNOUNCEMENT_BY_ID, values: [announcID, userID] });
        return rows;
    }

    // by status
    async getSpecificAnnouncementByStatus(announcStatus, userID) {
        const { rows } = await connect
            .query({ text: GET_ANNOUNCEMENT_BY_STATUS, values: [announcStatus, userID] });
        return rows;
    }

    // admin get all
    async adminGetAllAnnouncements() {
        const { rows } = await connect.query({ text: GET_ALL_ANNOUNCEMENTS });
        return rows;
    }

    // delete announcement
    async deleteAnnouncement(id) {
        const { rows } = await connect.query({ text: DELETE_ANNOUNCEMENT, values: [id] });
        return rows;
    }

    // update status
    async adminChangeStatusOfAnnouncement(announcId, status) {
        const { rows } = await connect.query({ text: UPDATE_ANNOUNCEMENT_STATUS, values: [status, announcId] });
        return rows;
    }

    // update user announcement
    async userUpdatesHisAnnouncement(userID, announcId, annNewBody) {
        const { rows } = await connect.query({ text: USER_UPDATE_HIS_ANNOUNCEMENT, values: [annNewBody, announcId, userID] });
        return rows;
    }
    
}

class AnnouncementData{
    constructor(announcData, ownerId) {
        this.announcementowner = ownerId;
        this.announcementstatus = "Pending"
        this.annoucemmenttext = announcData.text;
        this.announcementstartdate = announcData.startdate;
        this.announcementsenddate = announcData.enddate;
    }
}

const announcements = new Announcements();
export default {announcements,AnnouncementData}