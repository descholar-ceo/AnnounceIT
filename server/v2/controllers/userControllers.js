import user from '../models/user';
import { generateToken } from '../helpers/handleTokens';
import { checkPassword } from '../helpers/passwordEncryption';
  
    // signup
export const addUser = async (req, res)=>{
    const newDataToSave = new user.UsersData(req.body);
    const registeredUser = await user.users.saveUser(newDataToSave);
    const {id,fname,lname,email,isadmin } = registeredUser[0];
    const dataToSendToFrontend = {id, email,isadmin}
    const gotenToken = generateToken(dataToSendToFrontend);

    res.status(201).send({
        status: 'success',
        data: {
            token:gotenToken,
            first_name: fname,
            last_name: lname,
            email
        }
    });
     
}

// signin
export const getUser = async (req, res)=>{
    const { email, password } = req.body;
    const gottenUser = await user.users.getUserByEmail(email);
    if (checkPassword(password, gottenUser[0].password)) {
            const { id, fname, lname, email, isadmin } = gottenUser[0];
            const dataToSendToFrontend = {id, email, isadmin}
            const gotenToken = generateToken(dataToSendToFrontend); 

            res.status(200).send({
                status: 'success',
                data: {
                    token:gotenToken,
                    first_name: fname,
                    last_name: lname,
                    email
                }});
                 
        } else {
            res.status(403).send({
                status: 'error',
                error: `Email and password mismatch`
            });
        }
}

// add a user to blacklist
export const addUserToBlacklist = async (req, res) => {
    const { authenticatedUser } = req;
    if (authenticatedUser.isadmin) {
        const blaclistedUser =
            await user.users.addUserToBlackList(parseInt(req.body.id),req.body.isactive);
        res.status(200).send({ status: 'success', data: blaclistedUser });
    } else {
        res.status(403).send({ error: 'You are not admin, admins only can blaclist users!' });
    }
}