export const validateLoginData = (req, res, next) => {
    const { email, password } = req.body;

    if (email) {
        if (email.includes('@')) {
            if (password) {
                next();
            } else {
                res.status(400).send({
                    status: 'error',
                    error:'Enter your password please!',
                })
            }
        } else {
            res.status(400).send({
                status: 'error',
                error:'You entered something other than email!'
            })
        }
    } else {
        res.status(400).send({
            status: 'error',
            error:'Enter your email to login please'
        })
    }
}