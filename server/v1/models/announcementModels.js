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

export const adminGetAllAnnouncements = (req, res, next) => {
    const { authenticatedUser } = req;
    if (authenticatedUser.isadmin) {
        const allAnnouncs = announcemment.announcements.adminGetAllAnnouncements();

        if (allAnnouncs) {
            if (allAnnouncs.length !== 0) {
                res.status(200).send({
            status: 'success',
            data: allAnnouncs
        });
        next();
            } else {
                res.status(404).send({
                    status: 'error',
                    error:'It seems like no one has posted any announcement yet!'
                })
            }
        } else {
            res.status(500).send({
                status: 'error',
                error:'Unexpected cirmuctance occured in our servers, please refresh'
            })
        }
        
    } else {
        res.status(401).send({
            status:'error',
            error: 'You are not admin'
        })
    }
}

export const adminDeleteAnnouncement = (req, res, next) => {
    const { authenticatedUser } = req;
    const { id } = req.params;
    if (announcemment.announcements.announcArray.length >= parseInt(id)) {
        if (authenticatedUser.isadmin) {
            const deletedElmt = announcemment.announcements.deleteAnnouncement(parseInt(id));
    if (deletedElmt.length!==0) {
        res.status(200).send({
            status: 'success',
            data:  'Successfully deleted'
        });
        next();
    } else {
        res.status(500).send({
            status: 'error',
            error: 'We failed to delete your announcement, try again!'
        });
    }
    } else {
        res.status(401).send({
            status: 'error',
            error: 'You are not admin, admin only can delete'
        });
    }
    } else {
        res.status(404).send({
            status: 'error',
            error: 'The element you want to delete is not found'
        });
    } 
}

export const adminChangeAnnouncementStatus = (req, res, next) => {
    const { id, status } = req.body;
    const { authenticatedUser } = req;
    
    if (authenticatedUser.isadmin) {
        const changedAnnouncement = announcemment.announcements
            .adminChangeStatusOfAnnouncement(parseInt(id), status);
        
        if (changedAnnouncement) {
            res.status(200).json({
                status: 'success',
                data: changedAnnouncement
            });
            next();
        } else {
            res.status(500).send({
                status: 'error',
                error:'Failed to update the announcement you want, try again'
            })
        }
    } else {
        res.status(401).send({
            status: 'error',
            error:'You are not admin, only admins can update status of announcements'
        })
    }
}