const express = require('express');
const pug = require('pug');
const fs = require('fs');
const utils = require('./utils.js');

const router = express.Router();

router.get("/", (req, res) => {
    let template = fs.readFileSync('./views/index.pug', 'utf8');
    template = template.replace(/=code/g, "");
    template = template.replace(/=resultCode/g, "");
    let html = pug.render(template);
    res.set('Content-Type', 'text/html');
    res.send(html);
});

router.get("/help", (req, res) => {
    res.render("help");
});

router.post("/comments/clear/", (req, res) => {
    const {
        code,
        lang
    } = req.body;

    const resultCode = utils.clearComments(typeof code != 'undefined' ? code : "", lang)
    let template = fs.readFileSync('./views/index.pug', 'utf8');
    template = template.replace(/=code/g, code);
    template = template.replace(/=resultCode/g, resultCode);

    let html = pug.render(template, {lang: lang});
    res.set('Content-Type', 'text/html');
    res.send(html);
});

module.exports = router;