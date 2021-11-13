const express = require('express');
const pug = require('pug');
const fs = require('fs');
const utils = require('./src/utils.js');
const data = require('./data/data.json');

const router = express.Router();

router.get("/", (req, res) => {
    res.render("index", {languages: data.languages});
});

router.get("/help", (req, res) => {
    res.render("help", {before: data.examples.before, after: data.examples.after});
});

router.post("/comments/clear", (req, res) => {
    const {
        code,
        lang
    } = req.body;

    const resultCode = utils.clearComments(typeof code != 'undefined' ? code : "", lang);
    res.render("index", {code: code, resultCode: resultCode, lang: lang, languages: data.languages});
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

    data.reports.push({name: name, email: email, problem: problem});
    fs.writeFileSync('./data/data.json', JSON.stringify(data, null, 2));

    let template = fs.readFileSync('./views/thanks.pug', 'utf8');
    template = template.replace(/#{name}/g, name);

    let html = pug.render(template);
    res.set('Content-Type', 'text/html');
    res.send(html);
});

module.exports = router;