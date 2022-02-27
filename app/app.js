const express = require("express");
const path = require('path');
const cors = require("cors");
const helmet = require("helmet");
const { clientOrigins } = require("./config/env.dev");

const { messagesRouter } = require("./messages/messages.router");

/**
 * App Variables
 */

const app = express();
const apiRouter = express.Router();

/**
 *  App Configuration
 */

//  app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "https://dpmsandbox.dev");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });

app.use(helmet());
app.use(cors({ origin: clientOrigins }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'views')))

app.use("/api", apiRouter);

apiRouter.use("/messages", messagesRouter);

app.use(function (err, req, res, next) {
  console.log(err);
  res.status(500).send(err.message);
});

/**
 * Server Activation
 */

module.exports = app;
