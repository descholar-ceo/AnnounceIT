import Joi from '@hapi/joi';

export const validateAnnouncementData = (req, res, next) => {

        const { text, startdate, enddate } = req.body;

        const evalStartDate = new Date(startdate);
        const evalEndDate = new Date(enddate);
        
            const announcementDataSchema = Joi.object({
            text: Joi.string().required(),
            evalStartDate: Joi.date().required(),
            evalEndDate:Joi.date().required()
        });

        const validateRes = announcementDataSchema.validate({text, evalStartDate, evalEndDate });
        if (!validateRes.error) {
            next();
        } else {
            res.status(400).send({
        status: 'error',
        error:'Validations to your data has failed, make sure you follow all rules!'
        });
    }
}