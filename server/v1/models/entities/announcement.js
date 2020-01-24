class Announcements{
    constructor() {
        this.announcArray = [];
    }

    addNewAnnouncement(announcement) {
        this.announcArray.push(announcement);
        return this.announcArray.find((announc) => announc.id === announcement.id);
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