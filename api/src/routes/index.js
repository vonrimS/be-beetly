const express = require('express');
const Url = require('../models/url');
const router = express.Router();

const session = require('express-session');
const store = new session.MemoryStore();

// get all shorten url addresses from db
// TODO: based on session user auth
router.get('', async (req, res) => {
    console.log(req.sessionID);
    console.log(req.headers);
    const urls = await Url.find({});
    res.send(urls);
});

module.exports = router;