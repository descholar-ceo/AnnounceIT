import announcemment from '../models/entities/announcement'

export const addNewAnnouncement = (req, res, next) => {
    const newAnnouncId = announcemment.announcements.announcArray.length + 1;
    const announcToSave = new announcemment.AnnouncementData(req.body, newAnnouncId);
    const savedAnnounceme = announcemment.announcements.addNewAnnouncement(announcToSave);

    res.status(201).json({
        status: 'success',
        data:savedAnnounceme
    });
    
    next();
}