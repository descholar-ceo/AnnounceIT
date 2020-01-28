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

  // Route not found (404)
//   server.use((req, res, next) => {
//     const error = new Error('Not Found');
//     error.status = 404;
//     next(error);
//   });

// // 500 - Any server error
// server.use((err, req, res)=> {
//   res.status(err.status || 500);
//   res.json({
//     status: 'error',
//     message:err.message
//   })
  
// });

};

export default appGeneralMiddlewares;