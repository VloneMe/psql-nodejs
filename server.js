const express = require("express");
const dbConnection = require('./src/config/dbConfig');

dbConnection()
const port = 4000
const server = express();

server.use(express.json());


server.listen(port, () => {
    console.log(`[server] running at http://localhost:${port}`)
})