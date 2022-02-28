const { Router } = require('express');
const messagesRouter = Router();
const { checkJwt } = require('../middleware/check-jwt');

const {
  getPublicMessage,
  getProtectedMessage
} = require('../controllers/controllers.messages');

messagesRouter.route('/').get(getPublicMessage);
messagesRouter.route('/protected').get(checkJwt, getProtectedMessage);

module.exports = {
  messagesRouter
}