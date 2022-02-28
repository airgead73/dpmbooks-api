/**
 * env variables: authentication
 */
const {
  audience,
  domain,
  serverPort,
  clientOriginUrl,
  clientOrigins,  
} = require('./env.auth');

module.exports = {
  audience,
  domain,
  serverPort,
  clientOriginUrl,
  clientOrigins,
}