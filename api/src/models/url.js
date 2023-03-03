const mongoose = require('mongoose');

const shortenUrlSchema = new mongoose.Schema({
    origin: String,
    subpart: String,
    // TODO: implement user authentication and tracking by sessionId
    user: String
});

module.exports = mongoose.model('Url', shortenUrlSchema);