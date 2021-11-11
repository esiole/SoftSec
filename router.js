const express = require('express');
const pug = require('pug');
const fs = require('fs');
const utils = require('./utils.js');

const router = express.Router();

router.get("/", (req, res) => {
    res.render("index");
});

router.get("/help", (req, res) => {
    res.render("help");
});

router.post("/comments/clear", (req, res) => {
    const {
        code,
        lang
    } = req.body;

    const resultCode = utils.clearComments(typeof code != 'undefined' ? code : "", lang)
    res.render("index", {code: code, resultCode: resultCode, lang: lang});
});

router.get("/report", (req, res) => {
    res.render("report");
});

router.post("/report", (req, res) => {
    const {
        name,
        email,
        problem
    } = req.body;

    let template = fs.readFileSync('./views/thanks.pug', 'utf8');
    template = template.replace(/#{name}/g, name);

    let html = pug.render(template, {name: name});
    res.set('Content-Type', 'text/html');
    res.send(html);
});

module.exports = router;