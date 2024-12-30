const port = 3002;

const bodyParser = require('body-parser');
const allowCors = require('./cors');
const express = require('express');
const server = express();

server.use(
    bodyParser.urlencoded({
        extended: true
    })
);
server.use(bodyParser.json());
server.use(allowCors);

server.listen(port, _=>{
    console.log(`Executando backend na porta ${port}`);
});

module.exports = server;