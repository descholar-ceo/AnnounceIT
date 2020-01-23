class Announcements{
    constructor() {
        this.announcArray = [];
    }

    // adding new
    addNewAnnouncement(announcement) {
        this.announcArray.push(announcement);
        return this.announcArray.find((announc) => announc.id === announcement.id);
    }

    // all for a currently logged in user
    getAllAnnouncementsByOwnerId(owner) {
        let foundAnnouncA=[];
        this.announcArray.forEach((currAnn) => {
            if (currAnn.announcementowner === owner) {
                foundAnnouncA.push(currAnn);
            }
        })
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
        const myArr = this.announcArray;
        if(myArr.length < parseInt(id)){
            return {
                status:'error', error:'That number does\'nt exist on database!'
            }
        } else {
            //
        }


        if (this.announcArray[id]) {
             return delete this.announcArray[id];
        } else {
            return null;
        }
       
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