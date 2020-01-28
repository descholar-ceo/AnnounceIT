/**
 * THIS FILE IS TO SUMMARIZE ALL OF MIDDLEWARES IN ONE MODULE AND THEN
 * USE THEM IN index.js MODULE
 *
 */
import swaggerUI from 'swagger-ui-express';
import docs from '../../../swagger.json';
import routes from '../routes';
import { authenticate } from './authentication/authenticate';

const appGeneralMiddlewares = (server, express) => {

  server.use('/api/v1/docs', swaggerUI.serve, swaggerUI.setup(docs));
  server.use(express.json());

  server.use('/', routes.defaltRoute);
  server.use('/api/v1/auth', routes.userRouter);
  server.use('/api/v1/announcements', authenticate, routes.announcementRouter);
};

export default appGeneralMiddlewares;