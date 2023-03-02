const express = require('express');
const Url = require('../models/url');
const { GenerateString } = require('./../utils/generator');
const router = express.Router();


// create new shorten url address in format <domain>/<subpart>
// based on original user input on client side
// <subpart> will be generated in situ, 7 char long by default
router.post("", async (req, res, next) => {

    const subpart = GenerateString(7);

    const newUrl = new Url({
        origin: req.body.origin,
        subpart
    });

    newUrl.save().then(createdUrl => {
        res.status(201).json({
            message: 'Url shortened and saved successfully',
            subpart: createdUrl.subpart
        });
    });
});

module.exports = router;