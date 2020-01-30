import Joi from '@hapi/joi';
export const validateLoginData = (req, res, next) => {
    const { email, password } = req.body;

    const loginDataSchema = Joi.object({
        email: Joi.string().email().required(),
        password:Joi.string().required()
    });

    const validateRes = loginDataSchema.validate({ email, password });

    if (!validateRes.error) {
        next();
    } else {
        res.status(401).send({
            status:'error',
            error:'Unknown credentials'
        })
    }
}