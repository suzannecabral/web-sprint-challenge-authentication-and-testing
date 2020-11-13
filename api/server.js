const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const authenticate = require('../auth/authenticate-middleware.js');
const authRouter = require('../auth/auth-router.js');
const jokesRouter = require('../jokes/jokes-router.js');
const PORT = require('../index');

const server = express();

//my default logger function
const logger = (req,res,next) => {
  const ts = new Date();
  console.log(`-------------------`);
  console.log(`[${ts.toLocaleTimeString()}] ${req.method} ${req.url} `);
  next();

}

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(logger);

server.use('/api/auth', authRouter);
server.use('/api/jokes', authenticate, jokesRouter);

module.exports = server;
 