import user from '../../models/entities/user';

export const validateUserData = (req, res, next) => {
    const {
        fname, lname, email, phonenumber, address, password
    } = req.body;
    
    //checking if the email a user sent does exists
    let registeredEmails = []; 
    
    user.users.data.forEach((currUser) => {
        registeredEmails.push(currUser.email);
    })

    //validate data
    if (fname) {
        if (lname) {
            if (email && email.includes('@')) {
                if (!registeredEmails.includes(email)) {
                    if (phonenumber) {
                    if (address) {
                        if (password) {
                            next();
                        } else {
                            res.status(400).send({status:'error',error:'Enter a password you prefer to use!'})
                        }
                    } else {
                        res.status(400).send({status:'error',error:'Enter your address'})
                    }
                } else {
                    res.status(400).send({status:'error',error:'Enter your phone number'})
                }
                } else {
                    res.status(400).send({status:'error',error:'The email you put is already used!'})
               }
            } else {
                res.status(400).send({status:'error',error:'Enter a valid email'})
            }
        } else {
            res.status(400).send({status:'error',error:'Enter your last name'})
        }
    } else {
        res.status(400).send({status:'error',error:'Enter your first name'});
    }
}