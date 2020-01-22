import user from './entities/user';
import { generateToken } from '../helpers/handleTokens';

export const addUser = (req, res, next) => {
    const newId = user.users.data.length + 1;
    const newDataToSave = new user.UsersData(req.body, newId);
    const registeredUser = user.users.saveUser(newDataToSave);
    const id = registeredUser.id;
    const fname = registeredUser.fname;
    const lname = registeredUser.lname;
    const email = registeredUser.email;
    const phonenumber = registeredUser.phonenumber;
    const address = registeredUser.address;
    const isadmin = registeredUser.isadmin;
    const dataToSendToFrontend = {id, fname, lname, email, phonenumber, address,isadmin}
    const gotenToken = generateToken(dataToSendToFrontend);

    res.status(201).json({
        status: 'success',
        data: {
            token:gotenToken,
            first_name: fname,
            last_name: lname,
            email
        }
    });
    next();
    
}