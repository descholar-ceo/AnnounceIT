import user from '../../models/user';
export const validateUserStatus = async (req, res, next) => {
    const { authenticatedUser } = req;
    const userActive = await user.users.isUserActive(parseInt(authenticatedUser.id));
    
    if (userActive.isactive) {
        next();
    } else {
        res.status(400).send({ status: 'error', error: 'You are on blacklist' });
    }
}