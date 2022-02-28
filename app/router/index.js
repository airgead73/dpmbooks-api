const { Router } = require('express');
const apiRouter = Router();
const { authorsRouter } = require('../units/authors');

apiRouter.use('/authors', authorsRouter);

module.exports = {
  apiRouter
}