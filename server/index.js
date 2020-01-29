/* eslint-disable no-undef */
import express from 'express';
import dotenv from 'dotenv';
import resetTables from './v2/models/db/resetAllTables';
import appGeneralMiddlewares from './v2/middlewares/appGeneralMiddlewares';

dotenv.config();

const server = new express();
const port = process.env.PORT;

// in testing environment
if (process.env.NODE_ENV === 'test') {
  resetTables();
}

appGeneralMiddlewares(server, express);

server.listen(port, () => {
  console.log(`listening to port ${port}`);
});

export default server;