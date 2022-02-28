const { Router } = require('express');
const messagesRouter = Router();

/**
 * middleware
 */
const { checkJwt } = require('../middleware');

/**
 * controllers
 */

const {
  getPublicMessage,
  getProtectedMessage
} = require('../controllers');

/**
 * routes
 */

messagesRouter.route('/').get(getPublicMessage);
messagesRouter.route('/protected').get(checkJwt, getProtectedMessage);

module.exports = {
  messagesRouter
}