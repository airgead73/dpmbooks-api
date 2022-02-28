const { Router } = require('express');
const { messagesRouter } = require('./routes.messages');

const apiRouter = Router();

apiRouter.use('/messages', messagesRouter);

module.exports = {
  apiRouter
}