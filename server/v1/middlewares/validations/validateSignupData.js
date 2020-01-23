import user from '../../models/entities/user';

export const validateUserData = (req, res, next) => {
    const {
        fname, lname, email, phonenumber, address, password
    } = req.body;

    //checking if the email a user sent does exists
    let registeredEmails = []; 
    
    user.users.data.forEach((currUser) => {
        registeredEmails.push(currUser.email);
    });
    
    if (!fname) {
        res.status(400).send({status:'error',error:'Enter your first name'});
    } else if (!lname) {
        res.status(400).send({ status: 'error', error: 'Enter your last name' });
    } else if (!email && email.includes('@')) {
        res.status(400).send({ status: 'error', error: 'Enter a valid email' });
    } else if (registeredEmails.includes(email)) {
        res.status(400).send({ status: 'error', error: 'The email you put is already used!' });
    } else if (!phonenumber) {
        res.status(400).send({ status: 'error', error: 'Enter your phone number' });
    } else if (!address) {
        res.status(400).send({ status: 'error', error: 'Enter your address' });
    } else if (!password) {
        res.status(400).send({ status: 'error', error: 'Enter a password you prefer to use!' });
    } else {
        next();
    }
}
