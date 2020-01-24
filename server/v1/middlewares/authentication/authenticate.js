/* eslint-disable no-undef */
import jwt from 'jsonwebtoken';

export const authenticate = (req, res, next) => {
    let token;

    if (process.env.NODE_ENV === 'test') {
        token = req.query.auth;
    } else {
        token = req.headers.authorization.split(' ')[1];
    }

    try {
        const decodedToken = jwt.decode(token, process.env.TOKEN_KEY);
        req.authenticatedUser = decodedToken;
        next();
    } catch (err) {
        res.status(401).send({
            status: 'error',
            error:'You are not authorized to access the resources, you were trying, login first or signup'
        })
    }
}