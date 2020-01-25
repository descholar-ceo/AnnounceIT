/* eslint-disable no-undef */
import jwt from 'jsonwebtoken';

export const authenticate = (req, res, next) => {

    let token;

    if (process.env.NODE_ENV === 'test') {
        token = req.query.auth;
        console.log(token);
    } else {
        const { authorization } = req.headers;
        
        if (authorization) {
            token = authorization.split(' ')[1];
        }
    }

    if (token) {
       try {
        const decodedToken = jwt.decode(token, process.env.TOKEN_KEY);
        req.authenticatedUser = decodedToken;
        next();
    } catch (err) {
        res.status(401).send({
            status: 'error',
            error: 'You are not authorized to access the resources, you were trying, login first or signup'
        });
    } 
    } else {
        res.status(401).send({ status: 'error', error: 'Login first!' });
    }

}