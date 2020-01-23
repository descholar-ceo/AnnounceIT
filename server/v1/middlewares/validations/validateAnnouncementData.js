import user from '../../models/entities/user';

export const validateAnnouncementData = (req, res, next) => {
    const { owner } = req.body;
    const announcOwner = user.users.data.find((foundOwn) => foundOwn.id === owner);
    if (announcOwner) {
        next();
    } else {
        res.status(400).send({
            status: "error",
            error: "The user you are trying to use is not exists"
        })
    }
}