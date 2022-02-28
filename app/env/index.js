/**
 * auth variables
 */

const { audience, domain, clientOriginUrl, clientOrigins } = require('./env.auth');

/**
 * db variables
 */

const { mongoUri } = require('./env.db')

/**
 * server variables
 */
 const { isDev, serverPort } = require('./env.server');

 /**
  * exports
  */

module.exports = {
  audience,
  domain,
  clientOriginUrl,
  clientOrigins,
  isDev,
  mongoUri,
  serverPort
}