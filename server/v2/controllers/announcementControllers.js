import announcemment from '../models/announcement'


// function to create new a new announcement
    export const addNewAnnouncement = async(req, res) => {
    const announcToSave = new announcemment.AnnouncementData(req.body, parseInt(req.authenticatedUser.id));
    const savedAnnounceme = await announcemment.announcements.addNewAnnouncement(announcToSave);

    res.status(201).send({
        status: 'success',
        data:savedAnnounceme[0]
    });

}

export const getAllAnnouncementsByOwnerId  = async(req, res) =>{
    const { authenticatedUser } = req;
    
        const allMyAnnouncs = await announcemment.announcements.getAllAnnouncementsByOwnerId(authenticatedUser.id);
            if (allMyAnnouncs.length !== 0) {

                res.status(200).send({ status: 'success', data: allMyAnnouncs });

            } else {
                res.status(404).send({ status: 'error', error: 'No announcements found'});
        }
    } 

export const getSpecificAnnouncement = async(req, res) =>{
    const { authenticatedUser } = req;
    const {announcementId} = req.params;

    const gottenAnnounc = await announcemment.announcements.getSpecificAnnouncementById(announcementId,
        authenticatedUser.id);
    
    if (gottenAnnounc.length !== 0) {
            
            res.status(200).send({
                status: 'success',
                data: gottenAnnounc[0]
            });
        } else {
            res.status(404).send({
                status: 'error',
                error: 'You didn\'t such announcement'
            });
        }
}

export const getSpecificAnnouncementByStatus = async(req, res) =>{
    const { authenticatedUser } = req;
    const {announcementStatus} = req.params;

    const gottenAnnounc = await announcemment.announcements
        .getSpecificAnnouncementByStatus(announcementStatus, authenticatedUser.id);
    
    if (gottenAnnounc.length!==0) {
        res.status(200).send({
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

export const adminGetAllAnnouncements = async(req, res) =>{
    const { authenticatedUser } = req;
    if (authenticatedUser.isadmin) {
        const allAnnouncs = await announcemment.announcements.adminGetAllAnnouncements();

            res.status(200).send({
                    status: 'success',
                    data: allAnnouncs
                });
        
    } else {
        res.status(401).send({
            status:'error',
            error: 'You are not admin'
        })
    }
}

export const adminDeleteAnnouncement = async(req, res) =>{
    const { authenticatedUser } = req;
    const { id } = req.params;
    
        if (authenticatedUser.isadmin) {
            const deletedElmt = await announcemment.announcements.deleteAnnouncement(parseInt(id));
    if (deletedElmt.length!==0) {
        res.status(200).send({
            status: 'success',
            data: {
                message: 'Successfully deleted, you cannot undo this action.',
                deletedElmt
            }
        })

    } else {
        res.status(404).send({
            status: 'error',
            error: 'The element you want to delete is not found'
        });
    }
    } else {
        res.status(403).send({
            status: 'error',
            error: 'You are not admin, admin only can delete'
        });
    }
    
}

export const adminChangeAnnouncementStatus  = async(req, res) =>{
    const { id, status } = req.body;
    const { authenticatedUser } = req;
    if (authenticatedUser.isadmin) {
        const changedAnnouncement = await announcemment.announcements
            .adminChangeStatusOfAnnouncement(parseInt(id), status);
        if (changedAnnouncement.length!==0) {
            
            res.status(200).send({
                status: 'success',
                data: changedAnnouncement[0]
            });

        } else {
            res.status(404).send({
                status: 'error',
                error:'The announcement you want to update doens\'t exist'
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
export const userUpdateHisAnnouncement = async (req, res) =>{
    const { id: userId } = req.authenticatedUser;
        const { announcId, announcNewBody } = req.body;
        const changedAnnouncement = await announcemment.announcements.userUpdatesHisAnnouncement(userId, announcId, announcNewBody)
        
        if (changedAnnouncement.length!==0) {
            res.status(200).send({ status: 'success', data: changedAnnouncement[0] });

        } else {
            res.status(500).send({ status: 'error', error: 'This is most likely you didn\'t enter a right announcement_ID' });
        }
 }
