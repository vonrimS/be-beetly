const express = require('express');
const Url = require('../models/url');
const router = express.Router();


// delete document, based on document <subpart>
router.delete('/:subpart', async (req, res) => {
    console.log(req.params);
    const url = await Url.deleteOne({ subpart: req.params.subpart });
    // res.status(200).json({ message: 'Url deleted'});
    res.send({})
});

// // delete document, based on document <id>
// router.delete('/:id', async (req, res) => {
//     console.log(req.params);
//     const url = await Url.deleteOne({ _id: req.params.id });
//     // res.status(200).json({ message: 'Url deleted'});
//     res.send({})
// });

module.exports = router;