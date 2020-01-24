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

export const getAllAnnouncementsByOwnerId = (req, res, next) => {
    const { authenticatedUser } = req;
    const allMyAnnouncs = announcemment.announcements.getAllAnnouncementsByOwnerId(authenticatedUser.id);
    
    if (allMyAnnouncs) {
        if (allMyAnnouncs.length !== 0) {
            res.status(200).json({
                status: 'success',
                data: allMyAnnouncs
            });
            next();
        } else {
            res.status(200).send({
                status: 'success',
                data:['It seems that you don\'t have any recorded announcement yet']
            })
        }
    } else {
        res.status(404).send({
            error:'The announcements you are requesting for, are not found, try again!'
        })
    }
}

export const getSpecificAnnouncement = (req, res, next) => {
    const { authenticatedUser } = req;
    const {announcementId} = req.params;

    const gottenAnnounc = announcemment.announcements.getSpecificAnnouncementById(announcementId,
        authenticatedUser.id);
    
    if (gottenAnnounc) {
        res.status(200).json({
            status: 'success',
            data: gottenAnnounc
        });
        next();
    } else {
        res.status(404).send({
            status: 'error',
            error: 'The announcement you trying to get is not registered yet'
        })
    }
}

export const getSpecificAnnouncementByStatus = (req, res, next) => {
    const { authenticatedUser } = req;
    const {announcementStatus} = req.params;

    const gottenAnnounc = announcemment.announcements
        .getSpecificAnnouncementByStatus(announcementStatus, authenticatedUser.id);
    
    if (gottenAnnounc) {
        res.status(200).json({
            status: 'success',
            data: gottenAnnounc
        });
        next();
    } else {
        res.status(404).send({
            status: 'error',
            error: 'The announcement you trying to get is not registered yet'
        })
    }
}