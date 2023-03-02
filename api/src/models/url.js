const mongoose = require('mongoose');

const shortenUrlSchema = new mongoose.Schema({
    origin: String,
    subpart: String,
    // user: {type: String, required: true},
    user: String
    // origin: { type: String, required: true },
    // short: { type: String, required: true },
});

module.exports = mongoose.model('Url', shortenUrlSchema);