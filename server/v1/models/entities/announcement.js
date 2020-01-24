class Announcements{
    constructor() {
        this.announcArray = [];
    }

    addNewAnnouncement(announcement) {
        this.announcArray.push(announcement);
        return this.announcArray.find((announc) => announc.id === announcement.id);
    }

    getAllAnnouncementsByOwnerId(owner) {
        let foundAnnouncA=[];
        this.announcArray.forEach((currAnn) => {
            if (currAnn.announcementowner === owner) {
                foundAnnouncA.push(currAnn);
            }
        })
        return foundAnnouncA;
    }

    getSpecificAnnouncementById(announcID, userID) {
        return this.announcArray.find((currAnn) => parseInt(currAnn.announcementowner) === parseInt(userID)
            && parseInt(currAnn.announcementid) === parseInt(announcID));
    }
    
}

class AnnouncementData{
    constructor(announcData, id) {
        this.announcementid = id;
        this.announcementowner = announcData.owner;
        this.announcementstatus = announcData.status;
        this.annoucemmenttext = announcData.text;
        this.announcementstartdate = announcData.startdate;
        this.announcementsenddate = announcData.enddate;
    }
}

const announcements = new Announcements();
export default {announcements,AnnouncementData}