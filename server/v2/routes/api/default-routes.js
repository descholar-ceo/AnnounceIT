import { Router } from 'express';

const defaltRoute = new Router();

defaltRoute.get('/', (req, res) => {
    res.status(200).send({
        status: 'success',
        message: 'Welcome to the AnnounceIT app,'
    });
});

export default defaltRoute;