const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const router = require('./router');

const PORT = 3000;  // ПРИ НЕОБХОДИМОСТИ МОЖНО ЗАМЕНИТЬ

const server = express();
server.use(cookieParser());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.set("view engine", "pug");
server.set("views", `./views`);
server.use('/public', express.static('public'));
server.use("", router);
server.listen(PORT, () => console.log(`App listening on port ${PORT}.`));
