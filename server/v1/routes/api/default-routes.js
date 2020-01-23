import { Router } from 'express';

const defaultRoute = new Router();

defaultRoute.get('/', (req, res, next) => {
    res.status(200).send({
        status: 'success',
        message: 'Welcome to the AnnounceIT app,'
    });
    next();
});

defaultRoute.get('**', (req, res, next) => {
    res.status(404).send({
        status: 'error',
        message: 'The resource you are trying to access, doesn\'t exists!'
    });
    next();
});

export default defaultRoute;