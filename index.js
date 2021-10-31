const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const router = require('./router');

const server = express();
server.use(cookieParser());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.set("view engine", "pug");
server.set("views", `./views`);
server.use('/public', express.static('public'));
server.use("", router);
server.listen(3000, () => console.log("App listening on port 3000."));
