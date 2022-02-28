const { isDev } = require('../env');

const errorHandler = (err, req, res, next) => {  
  const statusCode = err.status || res.statusCode || 500;
  res.status(statusCode).json({
    error: true,
    message: err.message,
    stack: isDev ? err.stack : null
  });
}

module.exports = {
  errorHandler
}