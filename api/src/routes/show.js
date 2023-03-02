const express = require('express');
const Url = require('../models/url');
const router = express.Router();


// get the original url, based on <subpart> stored in db
router.get('/:subpart', (req, res, next) => {
    Url.findOne({ subpart: req.params.subpart }).exec()
        .then(url => {
            if (url) {
                res.redirect(301, url.origin);
                res.end();

            } else {
                res.sendStatus(404).json({
                    message: 'Url not found'
                });
            }
        });
});

module.exports = router;