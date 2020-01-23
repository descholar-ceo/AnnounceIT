import user from './entities/user';
import { generateToken } from '../helpers/handleTokens';
import { checkPassword } from '../helpers/passwordEncryption';

// signup
export const addUser = (req, res, next) => {
    const newId = user.users.data.length + 1;
    const newDataToSave = new user.UsersData(req.body, newId);
    const registeredUser = user.users.saveUser(newDataToSave);
    const {id,fname,lname,email,address,isadmin } = registeredUser;
    const dataToSendToFrontend = {id, email, address,isadmin}
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

// signin
export const getUser = (req, res, next) => {
    const { email, password } = req.body;
    const gottenUser = user.users.getUserByEmail(email);
    if (gottenUser) {
        
        if (checkPassword(password, gottenUser.password)) {
            const id = gottenUser.id;
            const fname = gottenUser.fname;
            const lname = gottenUser.lname;
            const email = gottenUser.email;
            const phonenumber = gottenUser.phonenumber;
            const address = gottenUser.address;
            const isadmin = gottenUser.isadmin;
            const dataToSendToFrontend = {id, fname, lname, email, phonenumber, address,isadmin}
            const gotenToken = generateToken(dataToSendToFrontend); 

            res.status(200).json({
                status: 'success',
                data: {
                    token:gotenToken,
                    first_name: fname,
                    last_name: lname,
                    email
                }});
                next();   
        } else {
            res.status(403).json({
                status: 'error',
                data: `You are not allowed to login, entered a wrong password!`
            })
        }
    } else {
        res.status(403).json({
            status: 'error',
            data: `You are not allowed to login, because we don't recognize ${email}
             on AnnounceIT servers, so Signup first!`
        });
    }
}
