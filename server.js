const express = require("express");
const dbConnection = require('./src/config/dbConfig');

dbConnection()
const server = express();

server.use(express.json());


server.listen(4000, () => {
    console.log('[server] running at http://localhost:4000')
})