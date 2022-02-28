/**
 * external modules
 */
const cors = require("cors");
const express = require("express");
const helmet = require("helmet");
const path = require('path');

/**
 * internal imports
 */
 const { apiRouter } = require('./router');
 const { clientOrigins } = require("./env");
 const { connectDB } = require('./config');
 const { errorHandler } = require('./middleware');

/**
 * app activation
 */

connectDB();
const app = express();

/**
 * middleware
 */

app.use(helmet());
app.use(cors({ origin: clientOrigins }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'views')))

app.use("/api", apiRouter);

/**
 * @description error handling
 */

 app.use(function(req, res, next) {
  const error = new Error('Path not found');
  error.status = 404;
  next(error);
});

app.use(errorHandler);

/**
 * @description Server Activation
 */

module.exports = app;
