const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const routes = require('./routes');

const server = express();

server.use(express.json());
server.use(cors({
  origin: '*'
}));
server.use(morgan('dev'));

server.use('/api', routes);

module.exports = { server };
