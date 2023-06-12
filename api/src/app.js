const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const server = express();

server.use(express.json());
server.use(cors({
  origin: '*'
}));
server.use(morgan('dev'));

module.exports = { server };
