import announcemment from '../models/announcement'

// function to create new a new announcement
export const addNewAnnouncement = (req, res) => {
    const announcToSave = new announcemment.AnnouncementData(req.body,
        announcemment.announcements.announcArray.length + 1, parseInt(req.authenticatedUser.id));
    const savedAnnounceme = announcemment.announcements.addNewAnnouncement(announcToSave);

    res.status(201).json({
        status: 'success',
        data:savedAnnounceme
    });

}

export const getAllAnnouncementsByOwnerId = (req, res) => {
    const { authenticatedUser } = req;
    
        const allMyAnnouncs = announcemment.announcements.getAllAnnouncementsByOwnerId(authenticatedUser.id);
            if (allMyAnnouncs.length !== 0) {

            res.status(200).json({ status: 'success', data: allMyAnnouncs});

            } else {
                res.status(404).send({ status: 'error', error: 'No announcements found'});
        }
    } 

export const getSpecificAnnouncement = (req, res) => {
    const { authenticatedUser } = req;
    const {announcementId} = req.params;

    const gottenAnnounc = announcemment.announcements.getSpecificAnnouncementById(announcementId,
        authenticatedUser.id);
    if (gottenAnnounc) {
        res.status(200).json({
            status: 'success',
            data: gottenAnnounc
        })

    } else {
        res.status(404).send({
            status: 'error',
            error: 'The announcement you trying to get is not registered yet'
        })
    }
}

export const getSpecificAnnouncementByStatus = (req, res) => {
    const { authenticatedUser } = req;
    const {announcementStatus} = req.params;

    const gottenAnnounc = announcemment.announcements
        .getSpecificAnnouncementByStatus(announcementStatus, authenticatedUser.id);
    
    if (gottenAnnounc.length!==0) {
        res.status(200).json({
            status: 'success',
            data: gottenAnnounc
        });

    } else {
        res.status(404).send({
            status: 'error',
            error: 'The announcement you trying to get is not registered yet'
        });
    }
}

export const adminGetAllAnnouncements = (req, res) => {
    const { authenticatedUser } = req;
    if (authenticatedUser.isadmin) {
        const allAnnouncs = announcemment.announcements.adminGetAllAnnouncements();

            if (allAnnouncs.length !== 0) {
                res.status(200).send({
                    status: 'success',
                    data: allAnnouncs
                });

            } else {
                res.status(404).send({
                    status: 'error',
                    error:'It seems like no one has posted any announcement yet!'
                })
            }
        
    } else {
        res.status(401).send({
            status:'error',
            error: 'You are not admin'
        })
    }
}

export const adminDeleteAnnouncement = (req, res) => {
    const { authenticatedUser } = req;
    const { id } = req.params;
    if (announcemment.announcements.announcArray.length >= parseInt(id)) {
        if (authenticatedUser.isadmin) {
            const deletedElmt = announcemment.announcements.deleteAnnouncement(parseInt(id));
    if (deletedElmt.length!==0) {
        res.status(200).send({
            status: 'success',
            data:  'Successfully deleted'
        })

    } else {
        res.status(500).send({
            status: 'error',
            error: 'We failed to delete your announcement, try again!'
        });
    }
    } else {
        res.status(403).send({
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

export const adminChangeAnnouncementStatus = (req, res) => {
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

        } else {
            res.status(500).send({
                status: 'error',
                error:'Failed to update the announcement you want, try again'
            })
        }
    } else {
        res.status(403).send({
            status: 'error',
            error: 'You are not admin, only admins can update status of announcements'
        });
    }
}

/* 
FUNCTION TO HELP A USER UPDATE HIS ANNOUNCEMENT BY SENDING ANNOUNCEMENT_ID
AND NEW ANNOUNCEMENT DETAILS HE WANT TO PUT
*/
export const userUpdateHisAnnouncement = (req, res) => {
    const { id: userId } = req.authenticatedUser;
        const { announcId, announcNewBody } = req.body;
        const changedAnnouncement = announcemment.announcements.userUpdatesHisAnnouncement(userId, announcId, announcNewBody)
        
        if (changedAnnouncement) {
            res.status(200).send({ status: 'success', data: changedAnnouncement });

        } else {
            res.status(500).send({ status: 'error', error: 'This is most likely you didn\'t enter a right announcement_ID' });
        }
    
    
}