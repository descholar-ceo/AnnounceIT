import { Router } from 'express';

const defaultRoute = new Router();

defaultRoute.get('/', (req, res, next) => {
    res.status(200).send({
        status: 'success',
        message: 'Welcome to the AnnounceIT app,'
    });
    next();
});

export default defaultRoute;