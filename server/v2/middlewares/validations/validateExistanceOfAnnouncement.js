import announcement from '../../models/announcement';
export const validateAnnouncExistance = async (req, res, next) => {
    const isAnnouncExist = await announcement.announcements
        .checkIfAnnouncementExist(parseInt(req.body.announcement_id));
    
    if (isAnnouncExist) {
        next();
    } else {
        res.status(400).send({ status: 'error', error: 'The announcement you want to flag, does\'t exist' });
    }
}