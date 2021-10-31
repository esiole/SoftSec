const express = require('express');
const pug = require('pug');

const router = express.Router();

router.get("/", (req, res) => {
    const input = "= 7 * 7";
    const test = pug.compile(`${input}`);
    res.render("test", {name: input, testName: test(), abc: `${input}`});
});

module.exports = router;