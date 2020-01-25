import user from '../../models/entities/user';

export const validateAnnouncementData = (req, res, next) => {
    const { authenticatedUser } = req;
    if (authenticatedUser) {
        const { text, startdate, enddate } = req.body;
        const { id } = authenticatedUser;
        const announcOwner = user.users.data.find((foundOwn) => foundOwn.id === parseInt(id));
    if (announcOwner) {
        if (text) {
            if (startdate) {
                if (enddate) {
                    next();
                } else {
                    res.status(400).send({status:'error',error:"Enter the end date of your announcement"})
                }
            } else {
                res.status(400).send({
                    status: 'error',
                    error:'Select the starting date of your announcement'
                })
            }
        } else {
            res.status(400).send({
                status:'error',
                error:'Enter the body of your annnouncement'
            })
        }
    } else {
        res.status(400).send({
            status: "error",
            error: "The user you are trying to use is not exists"
        });
    }
    } else {
        console.log('No id found');
    }
}