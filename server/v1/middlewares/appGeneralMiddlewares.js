/**
 * THIS FILE IS TO SUMMARIZE ALL OF MIDDLEWARES IN ONE MODULE AND THEN
 * USE THEM IN index.js MODULE
 *
 */
import swaggerUI from 'swagger-ui-express';
import docs from '../../../swagger.json';
import routes from '../routes';

const appGeneralMiddlewares = (server, express) => {

  server.use('/api/v1/docs', swaggerUI.serve, swaggerUI.setup(docs));
  server.use(express.json());
  server.use('/api/v1/auth', routes.userRouter);
};

export default appGeneralMiddlewares;