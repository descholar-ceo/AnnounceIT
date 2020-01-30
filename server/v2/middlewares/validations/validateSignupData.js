import user from '../../models/user';
import Joi from '@hapi/joi';

export const validateUserData =async (req, res, next) => {
    const {
        fname, lname, email, phonenumber, address, password
    } = req.body;

    //checking if the email a user sent does exists
    const isEmailRegistered = await user.users.checkIfEmailExistsFromDb(req.body);

    // validation
    if (!isEmailRegistered) {
        const signupDataSchema = Joi.object({
        fname: Joi.string().required(),
        lname: Joi.string().required(),
        email: Joi.string().email().required(),
        phonenumber: Joi.string().required(),
        address: Joi.string().required(),
            password: Joi.string().regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/)
                .required()
    });
    
    const validationRes = signupDataSchema
        .validate({fname, lname, email, phonenumber, address, password});

    if (!validationRes.error) {
        next();
    } else {
        res.status(400).send({
        status: 'error',
        error:'Validations to your data has failed, make sure you follow all rules!'
        });
        
    }
    } else {
        res.status(400).send({
            status:'error',
            error:'The email you are trying to register is already registered'
        })
    }
    
}
