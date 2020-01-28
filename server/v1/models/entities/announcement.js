class Announcements{
    constructor() {
        this.announcArray = [{
        "announcementid":1,
        "announcementowner":1,
        "announcementstatus":"pending",
        "annoucemmenttext":"default",
        "announcementstartdate":"default startdate",
        "announcementsenddate":"default enddate"
},{
        "announcementid":2,
        "announcementowner":1,
        "announcementstatus":"active",
        "annoucemmenttext":"default",
        "announcementstartdate":"default startdate",
        "announcementsenddate":"default enddate"
}];
    }

    // adding new
    addNewAnnouncement(announcement) {
        this.announcArray.push(announcement);
        return this.announcArray.find((announc) => announc.announcementid === announcement.announcementid);
    }

    // all for a currently logged in user
    getAllAnnouncementsByOwnerId(owner) {
        let foundAnnouncA=[];
        this.announcArray.forEach((currAnn) => {
            if (currAnn.announcementowner === owner) {
                foundAnnouncA.push(currAnn);
            }
        });
        return foundAnnouncA;
    }

    // by id
    getSpecificAnnouncementById(announcID, userID) {
        return this.announcArray.find((currAnn) => parseInt(currAnn.announcementowner) === parseInt(userID)
            && parseInt(currAnn.announcementid) === parseInt(announcID));
    }

    // by status
    getSpecificAnnouncementByStatus(announcStatus, userID) {
        let newArr = [];
        this.announcArray.forEach((currAnn) => {
            if (currAnn.announcementstatus === announcStatus && parseInt(currAnn.announcementowner) === parseInt(userID)) {
                newArr.push(currAnn);
            }
        });
        return newArr;
    }

    // admin get all
    adminGetAllAnnouncements(){
        return this.announcArray;
    }

    // delete announcement
    deleteAnnouncement(id) {
        return this.announcArray.splice(id);
    }

    // update status
    adminChangeStatusOfAnnouncement(announcId, status) {
        let changedAnnounc;
        this.announcArray.forEach((currAnn) => {
            if (currAnn.announcementid === announcId) {
                currAnn.announcementstatus = status;
                changedAnnounc = currAnn;
            }
        });

        return changedAnnounc;
    }

    // update user announcement
    userUpdatesHisAnnouncement(userID, announcId, annNewBody) {
        let changedAnnounc;
        this.announcArray.forEach((currAnn) => {
            
            if (parseInt(currAnn.announcementid) === parseInt(announcId)
                && parseInt(currAnn.announcementowner) === parseInt(userID)) {
                currAnn.annoucemmenttext = annNewBody;
                changedAnnounc = currAnn;
            }
        });

        return changedAnnounc;
    }
    
}

class AnnouncementData{
    constructor(announcData, id, ownerId) {
        this.announcementid = id;
        this.announcementowner = ownerId;
        this.announcementstatus = "Pending"
        this.annoucemmenttext = announcData.text;
        this.announcementstartdate = announcData.startdate;
        this.announcementsenddate = announcData.enddate;
    }
}

const announcements = new Announcements();
export default {announcements,AnnouncementData}