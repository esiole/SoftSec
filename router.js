const express = require('express');
const pug = require('pug');
const fs = require('fs');

const router = express.Router();

router.get("/", (req, res) => {
    res.render("index");
});

router.post("/comments/clear/", (req, res) => {
    const {
        code
    } = req.body;

    let template = fs.readFileSync('./views/index.pug', 'utf8');
    if (typeof code != 'undefined'){
        template = template.replace(/=resultCode/g, code);
    }

    let html = pug.render(template);
    res.set('Content-Type', 'text/html');
    res.send(html);

    //const input = "#{root.process.mainModule.require('child_process').execSync('ls')}";
    //const output = pug.compile(`p ${code}`)();
    //res.render("index", {resultCode: output});
});

module.exports = router;