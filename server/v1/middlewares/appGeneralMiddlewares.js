/**
 * THIS FILE IS TO SUMMARIZE ALL OF MIDDLEWARES IN ONE MODULE AND THEN
 * USE THEM IN index.js MODULE
 *
 */
import routes from '../routes';

const appGeneralMiddlewares = (server, express) => {

  server.use(express.json());

  server.use('/', routes.defaltRoute);
  server.use('/api/v1/auth', routes.userRouter);
  server.use('/api/v1/announcements', routes.announcementRouter);
  // server.use((req, res,next) => { 
    
  //   const err = new Error('Not found');
  //   err.status = 404;
  //   next(err);
  // });
};

export default appGeneralMiddlewares;