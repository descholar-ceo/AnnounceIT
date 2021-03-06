/* eslint-disable no-undef */
import express from 'express';
import dotenv from 'dotenv';
import appGeneralMiddlewares from './v2/middlewares/appGeneralMiddlewares';

dotenv.config();

const server = new express();
const port = process.env.PORT;

appGeneralMiddlewares(server, express);

server.listen(port, () => {
  console.log(`listening to port ${port}`);
});

export default server;